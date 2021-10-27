/* eslint-disable no-underscore-dangle */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkDhlLaxEcomIsValid(json) {
  if (!json || json.length < 2) {
    return false;
  }
  const keys = Object.values(json[1]);
  if (keys.length === 0) {
    return false;
  }
  const headers = [
    'ounces',
    'gram', // __empty
    'pound',
    'kilogram',
    'zone1-2', // __empty_3
    'zone03', // __empty_4
    'zone04', // __empty_5
    'zone05', // __empty_6
    'zone06', // __empty_7
    'zone07', // __empty_8
    'zone08', // __empty_8
    'zone11-13' // __empty_10
  ];

  return isIncludeHeader(headers, keys);
}

export function handleDhlLaxEcomJson(json) {
  const items = [];
  if (!json || json.length < 3) {
    return [];
  }
  let preWeight = 0;
  json.forEach((row) => {
    if (Object.keys(row).length === 12 && row.__empty !== 'gram') {
      const endWeight = Math.round(parseFloat(row.__empty, 10) + Number.EPSILON);
      const startWeight = preWeight;
      for (let zone = 1; zone < 13; zone += 1) {
        let unitWeightFee = 0;
        if (zone !== 9 && zone !== 10) {
          if (zone === 1 || zone === 2) {
            unitWeightFee = row.__empty_3;
          }
          if (zone >= 3 && zone < 9) {
            unitWeightFee = row[`__empty_${zone + 1}`];
          }
          if (zone >= 11 && zone < 14) {
            unitWeightFee = row.__empty_10;
          }
          items.push({
            mode: COST_MODE.TotalPrice,
            country_code: 'US',
            country_name: '美国',
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: 0,
            unit_weight_fee: unitWeightFee,
            zone
          });
        }
      }
      preWeight = endWeight;
    }
  });
  return items;
}
