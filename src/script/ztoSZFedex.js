/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { COST_MODE } from '../config/const';
import countries from '../config/countries.json';
import ztoSzFedexCountryZones from '../config/zto_sz_fedex_country_zones.json';
import { isIncludeHeader } from './utils';

export function checkZtoSZFedexTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = [
    'weightkg',
    'us1',
    'us2',
    'b',
    'd',
    'e',
    'f',
    'g',
    'h',
    'k',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'y',
    'z'
  ];
  return isIncludeHeader(headers, keys);
}

export function handleZtoSZFedexExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }

  const countryZones = ztoSzFedexCountryZones.data;

  let preWeight = 0;
  json.forEach((row) => {
    const startWeight = preWeight;
    const endWeight = parseFloat(row.weightkg, 10) * 1000;

    for (const key in row) {
      const countryCodes = countryZones.filter((cz) => cz.orgZone === key);
      countryCodes.forEach((cc) => {
        const findCountry = countries.data.find((item) => item.code === cc.countryCode);

        items.push({
          mode: COST_MODE.TotalPrice,
          country_code: cc.countryCode,
          country_name: findCountry ? findCountry.name_cn : '',
          start_weight: startWeight,
          end_weight: endWeight,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 0,
          unit_weight_fee: row[key],
          zone: cc.zone
        });
      });
    }
    preWeight = endWeight;
  });
  return items;
}
