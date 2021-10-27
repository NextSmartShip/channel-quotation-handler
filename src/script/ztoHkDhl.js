/* eslint-disable no-restricted-syntax */
import { COST_MODE } from '../config/const';
import countries from '../config/countries.json';
import ztoHkDhlCountryZones from '../config/zto_hk_dhl_country_zones.json';
import { isIncludeHeader } from './utils';

export function checkZtoHkDhlTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = [
    'weightkg',
    'dus',
    'zone1',
    'zone2',
    'zone3',
    'zone4',
    'zone5',
    'zone6',
    'zone7',
    'zone8',
    'zone9',
    'zone10',
    'zone11',
    'zone12',
    'zone13',
    'zone14',
    'zone15',
    'zone16',
    'zone17',
    'zone18',
    'zone19',
    'zone20',
    'zone21',
    'zone22',
    'zone23',
    'zone24',
    'zone25',
    'zone26',
    'zone27',
    'zone28',
    'zone29',
    'zone30'
  ];
  return isIncludeHeader(headers, keys);
}

export function handleZtoHkDhlExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }

  const countryZones = ztoHkDhlCountryZones.data;

  let preWeight = 0;
  json.forEach((row) => {
    const startWeight = preWeight;
    let endWeight = 0;
    let unitWeight = 0;
    // 大货；按每KG计费
    if (row.weightkg.toString().indexOf('kg') > -1) {
      const weights = row.weightkg.replace('kg', '').replace('+', '').split('-');
      if (weights.length === 2) {
        endWeight = parseFloat(weights[1], 10) * 1000;
      } else {
        endWeight = parseFloat(10000, 10) * 1000;
      }
      unitWeight = 1000;
    } else {
      endWeight = parseFloat(row.weightkg, 10) * 1000;
    }
    for (const key in row) {
      if (Number(row[key]) > 0) {
        const countryCodes = countryZones.filter((cz) => cz.orgZone === key);
        countryCodes.forEach((cc) => {
          let surcharge = 0;
          let warehousingFee = 0;
          const findCountry = countries.data.find((item) => item.code === cc.countryCode);

          if (unitWeight === 0) {
            if (cc.countryCode !== 'MO') {
              if (['AU', 'NZ'].includes(cc.countryCode)) {
                surcharge = Math.ceil(endWeight / 1000) * 18;
              } else {
                surcharge = Math.ceil(endWeight / 1000) * 8;
              }
            }
            warehousingFee = Math.ceil(endWeight / 1000) * 7;
          }

          items.push({
            mode: unitWeight === 0 ? COST_MODE.TotalPrice : COST_MODE.UnitPrice,
            country_code: cc.countryCode,
            country_name: findCountry ? findCountry.name_cn : '',
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: unitWeight,
            unit_weight_fee: row[key] + surcharge + warehousingFee,
            zone: cc.zone
          });
        });
      }
    }
    preWeight = endWeight;
  });

  return items;
}
