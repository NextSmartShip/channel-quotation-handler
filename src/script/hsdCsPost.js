/* eslint-disable no-underscore-dangle */
import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkHsdCsPostTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  const keys1 = Object.keys(json[1]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['0-150g含150g', '__empty', '150g-300g含300g', '__empty_1', '300g以上', '__empty_2'];
  const headers1 = [
    '寄达路向',
    '是否恢复收寄',
    '0-150g含150g',
    '__empty',
    '150g-300g含300g',
    '__empty_1',
    '300g以上',
    '__empty_2',
  ];
  return isIncludeHeader(headers, keys) && isIncludeHeader(headers1, keys1);
}

export function handleHsdCsPostExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];

  json.forEach((row, index) => {
    if (index > 0) {
      const countryCode = getCountryCodeByName(row['寄达路向']);

      if (row['0-150g含150g']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: row['寄达路向'],
          start_weight: 0,
          end_weight: 150,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: (row['0-150g含150g'] / 1000).toFixed(5),
          processing_fee: row.__empty,
          channel_code: `4121 ${row['是否恢复收寄']}`,
        });
      }

      if (row['150g-300g含300g']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: row['寄达路向'],
          start_weight: 150,
          end_weight: 300,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: (row['150g-300g含300g'] / 1000).toFixed(5),
          processing_fee: row.__empty_1,
          channel_code: `4121 ${row['是否恢复收寄']}`,
        });
      }

      if (row['300g以上']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: row['寄达路向'],
          start_weight: 150,
          end_weight: 10000 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: (row['300g以上'] / 1000).toFixed(5),
          processing_fee: row.__empty_2,
          channel_code: `4121 ${row['是否恢复收寄']}`,
        });
      }
    }
  });

  return items;
}
