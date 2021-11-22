import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkHsdNLPostTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['中文国家', '国家简码', '运费rmb/kg', '挂号费rmb/票'];

  return isIncludeHeader(headers, keys);
}

export function handleHsdNLPostExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  json.forEach((row) => {
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: row['国家简码'],
      country_name: row['中文国家'],
      start_weight: 0,
      end_weight: 2 * 1000,
      first_weight: 10,
      first_weight_fee: ((row['运费rmb/kg'] / 1000) * 10).toFixed(5),
      unit_weight: 1,
      unit_weight_fee: (row['运费rmb/kg'] / 1000).toFixed(5),
      registration_fee: row['挂号费rmb/票'],
      channel_code: row['备注'] || '',
    });
  });

  return items;
}
