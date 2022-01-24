/* eslint-disable no-plusplus */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkPFCCaExpressBTemplateIsValid(json) {
  if (!json || json.length < 1 || Object.keys(json[0]).length === 0) return false;
  const headers = ['重量kg', '价格rmb/票'];
  const keys = Object.keys(json[0]);
  return isIncludeHeader(headers, keys);
}

export function handlePFCCaExpressBExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  let preWeight = 0;
  json.forEach((row) => {
    items.push({
      mode: COST_MODE.TotalPrice,
      country_code: 'CA',
      country_name: '加拿大',
      start_weight: preWeight,
      end_weight: parseFloat(row['重量kg'], 10) * 1000,
      first_weight: 0,
      first_weight_fee: 0,
      unit_weight: 0,
      unit_weight_fee: row['价格rmb/票'],
    });
    preWeight = parseFloat(row['重量kg'], 10) * 1000;
  });
  return items;
}
