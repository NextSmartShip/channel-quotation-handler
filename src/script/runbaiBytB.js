import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkRunbaiBytBTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['序号', '路向', '资费标准元/千克', '操作费元/件', '起重/克', '限重/克'];

  return isIncludeHeader(headers, keys);
}

export function handleRunbaiBytBExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  json.forEach((row) => {
    const unitFee = row['资费标准元/千克'] / 1000;
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: getCountryCodeByName(row['路向']),
      country_name: row['路向'],
      start_weight: 0,
      end_weight: row['限重/克'],
      first_weight: row['起重/克'],
      first_weight_fee: Math.ceil(unitFee * row['起重/克'] * 100) / 100,
      unit_weight: 1,
      unit_weight_fee: unitFee,
      processing_fee: row['操作费元/件'],
      channel_code: row['备注'] || '',
    });
  });

  return items;
}
