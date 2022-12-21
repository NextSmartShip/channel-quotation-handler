/* eslint-disable no-restricted-syntax */
import { COST_MODE } from '../config/const';
import countries from '../config/countries.json';
import fourpxDhlZones from '../config/fourpx_dhl_zones.json';
import { isIncludeHeader } from './utils';

export function check4pxDhlTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  // console.log('4: ', keys);
  if (keys.length === 0) {
    return false;
  }

  const headers = [
    'weightkg',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ];
  return isIncludeHeader(headers, keys);
}

export function handle4pxDhlExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }

  const countryZones = fourpxDhlZones.data;

  let preWeight = 0;
  json.forEach((row) => {
    const startWeight = preWeight;
    let endWeight = 0;
    let unitWeight = 0;
    // 大货；按每KG计费
    if (row.weightkg && row.weightkg.toString().indexOf('kg') > -1) {
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
          const surcharge = 0;
          // let warehousingFee = 0;
          const findCountry = countries.data.find((item) => item.code === cc.countryCode);

          // if (unitWeight === 0) {
          //   // zone1 (澳门) 免费，排除澳门
          //   if (!['zone1'].includes(key)) {
          //     // dus 美国 + zone4 （澳洲、新西兰）
          //     if (
          //       ['dus', 'zone4', 'zone9', 'zone10', 'zone25', 'zone26', 'zone27', 'zone29'].includes(key) ||
          //       // 6区（关岛，马绍尔群岛、美属萨摩亚、密克罗尼西亚联邦,北马里亚纳群岛-塞班岛）
          //       (['zone6'].includes(key) && ['GU', 'MH', 'AS', 'FM', 'MP'].includes(cc.countryCode)) ||
          //       // 28区 除去圣多美和普林西、蒙古
          //       (['zone28'].includes(key) && !['ST', 'MN'].includes(cc.countryCode))
          //     ) {
          //       surcharge = Math.ceil(endWeight / 1000) * 16;
          //     } else if (
          //       // 11区至16区（除去阿富汗）+ 18区
          //       (['zone11', 'zone12', 'zone13', 'zone14', 'zone15', 'zone16', 'zone18'].includes(key) &&
          //         !['AF'].includes(cc.countryCode)) ||
          //       // 6区 列支敦士登
          //       (['zone6'].includes(key) && ['LI'].includes(cc.countryCode)) ||
          //       // 19区 以色列
          //       (['zone19'].includes(key) && ['IL'].includes(cc.countryCode))
          //     ) {
          //       surcharge = Math.ceil(endWeight / 1000) * 10;
          //     } else {
          //       surcharge = Math.ceil(endWeight / 1000) * 8;
          //     }
          //   }
          //   // 排仓费
          //   // warehousingFee = Math.ceil(endWeight / 1000) * 15;
          // }

          items.push({
            mode: unitWeight === 0 ? COST_MODE.TotalPrice : COST_MODE.UnitPrice,
            country_code: cc.countryCode,
            country_name: findCountry ? findCountry.name_cn : '',
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: unitWeight,
            // unit_weight_fee: row[key] + surcharge + warehousingFee,
            unit_weight_fee: row[key] + surcharge,
            zone: cc.zone,
          });
        });
      }
    }
    preWeight = endWeight;
  });

  return items;
}
