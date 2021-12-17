import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkHuahanGlobalTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['国家', '重量', '运费', '处理费', '时效'];

  return isIncludeHeader(headers, keys);
}

export function handleHuahanGlobalExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  let preWeight = 0;
  let countryName = '';
  let countryCode = '';
  json.forEach((row) => {
    if (row['国家']) {
      preWeight = 0;
      countryName = row['国家'];
      countryCode = getCountryCodeByName(countryName);
    }
    const rowWeight = String(row['重量']);
    const weights = rowWeight.replace('kg', '').split('-');
    if (weights && weights.length === 2) {
      let firstWeight = 0;
      let firstWeightFee = 0;
      if (
        (['美国', '加拿大', '巴西'].includes(row['国家']) && weights[0] * 1000 === 50) ||
        (!['美国', '加拿大', '巴西'].includes(row['国家']) && weights[0] * 1000 === 10)
      ) {
        firstWeight = weights[0] * 1000;
        firstWeightFee = (firstWeight * row['运费']) / 1000;
      }
      items.push({
        mode: firstWeight === 0 ? COST_MODE.UnitPrice : COST_MODE.ContinuedUnitPrice,
        country_code: countryCode,
        country_name: countryName,
        start_weight: preWeight * 1000,
        end_weight: weights[1] * 1000,
        first_weight: firstWeight,
        first_weight_fee: firstWeightFee,
        unit_weight: 1,
        unit_weight_fee: row['运费'] / 1000,
        processing_fee: row['处理费'],
      });
      preWeight = Number(weights[1]);
    }
  });

  return items;
}
