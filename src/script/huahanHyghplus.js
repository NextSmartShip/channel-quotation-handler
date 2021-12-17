import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkHuahanHyghplusTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = [
    '序号',
    '寄达国',
    '寄达国中文名称',
    '挂号/基本邮费元/千克',
    '挂号/处理费元/件',
    '平邮/基本邮费元/千克',
    '平邮/处理费元/件',
  ];
  return isIncludeHeader(headers, keys);
}

export function handleHuahanHyghplusExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  json.forEach((row) => {
    let firstWeight = 5;
    let firstWeightFee = 0;
    if (['巴西', '新西兰'].includes(row['寄达国中文名称'])) {
      firstWeight = 50;
    }
    firstWeightFee = (firstWeight * row['挂号/基本邮费元/千克']) / 1000;
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: getCountryCodeByName(row['寄达国中文名称']),
      country_name: row['寄达国中文名称'],
      start_weight: 0,
      end_weight: 2 * 1000,
      first_weight: firstWeight,
      first_weight_fee: firstWeightFee,
      unit_weight: 1,
      unit_weight_fee: row['挂号/基本邮费元/千克'] / 1000,
      processing_fee: row['挂号/处理费元/件'],
      channel_code: row['备注'] || '',
    });
  });

  return items;
}
