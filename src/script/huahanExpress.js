import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkHuahanExpressTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['序号', '寄达国', '寄达国中文名称', '首重元/50g', '续重元/50g', '限重千克', '最大尺寸限制'];

  return isIncludeHeader(headers, keys);
}

export function handleHuahanExpressExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  json.forEach((row) => {
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: getCountryCodeByName(row['寄达国中文名称']),
      country_name: row['寄达国中文名称'],
      start_weight: 0,
      end_weight: row['限重千克'] * 1000,
      first_weight: 0.05 * 1000,
      first_weight_fee: row['首重元/50g'],
      unit_weight: 50,
      unit_weight_fee: row['续重元/50g'],
    });
  });

  return items;
}
