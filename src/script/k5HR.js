import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkK5HRTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['货物类型', '首重0.5kg', '续重0.5kg', '渠道代码', '时效', '备注'];

  return isIncludeHeader(headers, keys);
}

export function handleK5HRExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  json.forEach((row) => {
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: 'KR',
      country_name: `韩国${row['货物类型']}`,
      start_weight: 0,
      end_weight: 4999,
      first_weight: 500,
      first_weight_fee: row['首重0.5kg'],
      unit_weight: 500,
      unit_weight_fee: row['续重0.5kg'],
      processing_fee: 0,
      channel_code: row['渠道代码'].toUpperCase(),
    });
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: 'KR',
      country_name: `韩国${row['货物类型']}`,
      start_weight: 4999,
      end_weight: 10 * 1000,
      first_weight: 500,
      first_weight_fee: row['首重0.5kg'],
      unit_weight: 500,
      unit_weight_fee: row['续重0.5kg'],
      processing_fee: 30,
      channel_code: row['渠道代码'].toUpperCase(),
    });
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: 'KR',
      country_name: `韩国${row['货物类型']}`,
      start_weight: 10 * 1000,
      end_weight: 15 * 1000,
      first_weight: 500,
      first_weight_fee: row['首重0.5kg'],
      unit_weight: 500,
      unit_weight_fee: row['续重0.5kg'],
      processing_fee: 60,
      channel_code: row['渠道代码'].toUpperCase(),
    });
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: 'KR',
      country_name: `韩国${row['货物类型']}`,
      start_weight: 15 * 1000,
      end_weight: 21 * 1000,
      first_weight: 500,
      first_weight_fee: row['首重0.5kg'],
      unit_weight: 500,
      unit_weight_fee: row['续重0.5kg'],
      processing_fee: 80,
      channel_code: row['渠道代码'].toUpperCase(),
    });
  });

  return items;
}
