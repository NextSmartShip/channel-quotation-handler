import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkHsdEmsTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = ['资费区', '通达国家地区', '国家代码', '起重500克及以内物品', '续重每500克或其零数', '限重/克'];

  return isIncludeHeader(headers, keys);
}

export function handleHsdEmsExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  json.forEach((row) => {
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: row['国家代码'].toUpperCase(),
      country_name: row['通达国家地区'],
      start_weight: 0,
      end_weight: row['限重/克'],
      first_weight: 500,
      first_weight_fee: row['起重500克及以内物品'],
      unit_weight: 500,
      unit_weight_fee: row['续重每500克或其零数'],
    });
  });

  return items;
}
