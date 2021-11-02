/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkLtianCAExpressTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  const keys1 = Object.keys(json[1]);
  if (keys.length === 0) {
    return false;
  }
  const headers = [
    '0.05kg≤包裹重量≤0.3kg',
    '__empty',
    '0.3kg＜包裹重量≤0.5kg',
    '__empty_1',
    '0.5kg＜包裹重量≤2kg',
    '__empty_2',
    '2kg＜包裹重量≤30kg',
    '__empty_3',
  ];
  const headers1 = [
    '目的国',
    '国内发货区域',
    '渠道代码',
    '渠道名称',
    '服务类型',
    '0.05kg≤包裹重量≤0.3kg',
    '__empty',
    '0.3kg＜包裹重量≤0.5kg',
    '__empty_1',
    '0.5kg＜包裹重量≤2kg',
    '__empty_2',
    '2kg＜包裹重量≤30kg',
    '__empty_3',
  ];
  return isIncludeHeader(headers, keys) && isIncludeHeader(headers1, keys1);
}

export function handleLtianCAExpressExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];

  json.forEach((row, index) => {
    if ([1, 2].includes(index)) {
      if (row['0.05kg≤包裹重量≤0.3kg']) {
        items.push({
          mode: COST_MODE.ContinuedUnitPrice,
          country_code: 'CA',
          country_name: row['目的国'],
          start_weight: 0,
          end_weight: 0.3 * 1000,
          first_weight: 0.05 * 1000,
          first_weight_fee: (row.__empty * 0.05).toFixed(5),
          unit_weight: 1,
          unit_weight_fee: (row.__empty / 1000).toFixed(5),
          processing_fee: row['0.05kg≤包裹重量≤0.3kg'],
          channel_code: row['渠道代码'].toUpperCase(),
        });
      }

      if (row['0.3kg＜包裹重量≤0.5kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: 'CA',
          country_name: row['目的国'],
          start_weight: 0.3 * 1000,
          end_weight: 0.5 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: (row.__empty_1 / 1000).toFixed(5),
          processing_fee: row['0.3kg＜包裹重量≤0.5kg'],
          channel_code: row['渠道代码'].toUpperCase(),
        });
      }

      if (row['0.5kg＜包裹重量≤2kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: 'CA',
          country_name: row['目的国'],
          start_weight: 0.5 * 1000,
          end_weight: 2 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: (row.__empty_2 / 1000).toFixed(5),
          processing_fee: row['0.5kg＜包裹重量≤2kg'],
          channel_code: row['渠道代码'].toUpperCase(),
        });
      }

      if (row['2kg＜包裹重量≤30kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: 'CA',
          country_name: row['目的国'],
          start_weight: 2 * 1000,
          end_weight: 30 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: row.__empty_3 / 1000,
          processing_fee: row['2kg＜包裹重量≤30kg'],
          channel_code: row['渠道代码'].toUpperCase(),
        });
      }
    }
  });

  return items;
}
