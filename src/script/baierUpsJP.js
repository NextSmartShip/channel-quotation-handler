import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checKBaierUpsJPTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = ['重量/kg', '日本'];

  return isIncludeHeader(headers, keys);
}

export function handleBaierUpsJPExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  let preWeight = 0;
  json.forEach((row) => {
    const rowWeight = String(row['重量/kg']);
    const weights = rowWeight.split('-');
    if (weights && weights.length === 2) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'JP',
        country_name: '日本',
        start_weight: preWeight * 1000,
        end_weight: weights[1] * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['日本'],
      });
      preWeight = Number(weights[1]);
    } else {
      items.push({
        mode: COST_MODE.TotalPrice,
        country_code: 'JP',
        country_name: '日本',
        start_weight: preWeight * 1000,
        end_weight: row['重量/kg'] * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 0,
        unit_weight_fee: row['日本'],
      });
      preWeight = row['重量/kg'];
    }
  });

  return items;
}
