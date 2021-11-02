/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkLtianCASensitiveTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  const keys1 = Object.keys(json[1]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['0.1kg≤包裹重量≤2kg', '__empty_2'];
  const headers1 = ['目的国', '发货区域', '渠道代码', '渠道名称', '服务类型', '0.1kg≤包裹重量≤2kg', '__empty_2'];
  return isIncludeHeader(headers, keys) && isIncludeHeader(headers1, keys1);
}

export function handleLtianCASensitiveExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];

  json.forEach((row, index) => {
    if ([1].includes(index)) {
      if (row['0.1kg≤包裹重量≤2kg']) {
        items.push({
          mode: COST_MODE.ContinuedUnitPrice,
          country_code: 'CA',
          country_name: row['目的国'],
          start_weight: 0,
          end_weight: 2 * 1000,
          first_weight: 0.1 * 1000,
          first_weight_fee: (row.__empty_2 * 0.1).toFixed(5),
          unit_weight: 1,
          unit_weight_fee: (row.__empty_2 / 1000).toFixed(5),
          processing_fee: row['0.1kg≤包裹重量≤2kg'],
          channel_code: row['渠道代码'].toUpperCase(),
        });
      }
    }
  });

  return items;
}
