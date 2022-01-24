/* eslint-disable no-plusplus */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkPFCUspsBaTemplateIsValid(json) {
  if (!json || json.length < 1 || Object.keys(json[0]).length === 0) return false;
  const headers = ['重量g', '价格rmb/票'];
  const keys = Object.keys(json[0]);
  return isIncludeHeader(headers, keys);
}

export function handlePFCUspsBaExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  let preWeight = 0;
  json.forEach((row) => {
    items.push({
      mode: COST_MODE.TotalPrice,
      country_code: 'US',
      country_name: '美国',
      start_weight: preWeight,
      end_weight: row['重量g'],
      first_weight: 0,
      first_weight_fee: 0,
      unit_weight: 0,
      unit_weight_fee: row['价格rmb/票'],
    });
    preWeight = row['重量g'];
  });
  return items;
}
