/* eslint-disable no-underscore-dangle */
import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkBlusBuspTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[1]);
  const headers = [
    '寄达国家和地区',
    '重量计算',
    '运费rmb/kg',
    '挂号费rmb/票',
    '最低收费重',
    '清关方式',
    '上网时效',
    '派送时效',
    '转运方式',
    '产品类型',
    '派送服务商',
  ];
  return isIncludeHeader(headers, keys);
}

export function handleBlusBuspExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  json.forEach((row, index) => {
    const weights = row['重量计算'].replace('kg', '').split('-');
    const country = row['寄达国家和地区'];
    const countryCode = getCountryCodeByName(country);
    const unitWeight = 1000;
    if (index === 0) {
      items.push({
        mode: COST_MODE.ContinuedUnitPrice,
        country_code: countryCode,
        country_name: country,
        start_weight: weights.length === 2 ? weights[0] * unitWeight : '',
        end_weight: weights.length === 2 ? weights[1] * unitWeight : '',
        first_weight: 50,
        first_weight_fee: ((row['运费rmb/kg'] / unitWeight) * 50).toFixed(5),
        unit_weight: 1,
        unit_weight_fee: row['运费rmb/kg'] / unitWeight,
        registration_fee: row['挂号费rmb/票'],
      });
    } else {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: countryCode,
        country_name: country,
        start_weight: weights.length === 2 ? weights[0] * unitWeight : '',
        end_weight: weights.length === 2 ? weights[1] * unitWeight : '',
        unit_weight: 1,
        unit_weight_fee: row['运费rmb/kg'] / unitWeight,
        registration_fee: row['挂号费rmb/票'],
      });
    }
  });
  return items;
}
