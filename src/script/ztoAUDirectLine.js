/* eslint-disable no-plusplus */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkZtoAUDirectLineTemplateIsValid(json) {
  if (!json || json.length < 1 || Object.keys(json[0]).length === 0) return false;
  const headers = [];
  const keys = Object.keys(json[0]);
  const rowLen = keys.length;
  for (let idx = 0; idx < rowLen / 2; idx++) {
    if (idx === 0) {
      headers.push('重量kg');
      headers.push('运费');
    } else {
      headers.push(`重量kg_${idx}`);
      headers.push(`运费_${idx}`);
    }
  }
  return isIncludeHeader(headers, keys);
}

export function handleZtoAUDirectLineExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const rowsData = [];
  json.forEach((r) => {
    const rowLen = Object.keys(r).length;
    for (let idx = 0; idx < rowLen / 2; idx++) {
      let weight = 0;
      let cost = 0;
      if (idx === 0) {
        weight = r['重量kg'];
        cost = r['运费'];
      } else {
        weight = r[`重量kg_${idx}`];
        cost = r[`运费_${idx}`];
      }
      rowsData.push({
        weight,
        cost
      });
    }
  });

  const sortByKey = (key, arr, callback) => arr.sort(({ [key]: a }, { [key]: b }) => callback(a, b));
  sortByKey('weight', rowsData, (a, b) => a - b);

  const items = [];
  let preWeight = 0;
  if (rowsData && rowsData.length > 0) {
    rowsData.forEach((item) => {
      items.push({
        mode: COST_MODE.TotalPrice,
        country_code: 'AU',
        country_name: '澳大利亚',
        start_weight: parseFloat(preWeight, 10) * 1000,
        end_weight: parseFloat(item.weight, 10) * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 0,
        unit_weight_fee: item.cost
      });
      preWeight = item.weight;
    });
  }
  return items;
}
