import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkHeiMaoJPTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = [
    '产品名称',
    '产品代码',
    '重量以0.5kg进位',
    '首重元/0.5kg',
    '续重元/0.5kg',
    '出货类型',
    '派送商',
    '参考时效',
  ];

  return isIncludeHeader(headers, keys);
}

export function handleHeiMaoJPExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  let weights = '';
  json.forEach((row) => {
    if (row['重量以0.5kg进位']) {
      weights = row['重量以0.5kg进位'].replace('kg', '').split('-');
    }
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: 'JP',
      country_name: '日本',
      start_weight: 0,
      end_weight: weights[1] * 1000,
      first_weight: 0.5 * 1000,
      first_weight_fee: row['首重元/0.5kg'],
      unit_weight: 0.5 * 1000,
      unit_weight_fee: row['续重元/0.5kg'],
      channel_code: row['产品代码'].toUpperCase(),
    });
  });

  return items;
}
