/* eslint-disable no-underscore-dangle */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkUBITemplateIsValid(json) {
  if (!json || json.length < 3) {
    return false;
  }
  const headers0 = ['新西兰全程特快服务', '__empty_2', '__empty_4'];
  const headers1 = ['新西兰全程特快服务', '__empty_2', '__empty_3', '__empty_4', '__empty_5'];
  const keys0 = Object.keys(json[0]);
  const keys1 = Object.keys(json[1]);
  return isIncludeHeader(headers0, keys0) && isIncludeHeader(headers1, keys1);
}

export function handleUBIExcelJson(json) {
  if (!json || json.length < 3) {
    return [];
  }
  const items = [];
  json.forEach((row, index) => {
    if (index === 2) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'NZ',
        country_name: '新西兰',
        start_weight: 0,
        end_weight: row.__empty_1 * 1000,
        unit_weight: 1,
        unit_weight_fee: (row.__empty_5 / 1000).toFixed(5),
        processing_fee: row.__empty_4,
      });
    }
  });
  return items;
}
