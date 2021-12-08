import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checKBaierUpsHDCTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['重量/kg', '韩国/马来西亚/菲律宾/新加坡/台湾/泰国'];

  return isIncludeHeader(headers, keys);
}

export function handleBaierUpsHDCExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  let preWeight = 0;
  const countryNames = ['韩国', '马来西亚', '菲律宾', '新加坡', '台湾', '泰国'];
  json.forEach((row) => {
    const rowWeight = String(row['重量/kg']);
    const weights = rowWeight.split('-');
    if (weights && weights.length === 2) {
      countryNames.forEach((countryName) => {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: getCountryCodeByName(countryName),
          country_name: countryName,
          start_weight: preWeight * 1000,
          end_weight: weights[1] * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['韩国/马来西亚/菲律宾/新加坡/台湾/泰国'],
        });
      });
      preWeight = Number(weights[1]);
    } else {
      countryNames.forEach((countryName) => {
        items.push({
          mode: COST_MODE.TotalPrice,
          country_code: getCountryCodeByName(countryName),
          country_name: countryName,
          start_weight: preWeight * 1000,
          end_weight: row['重量/kg'] * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 0,
          unit_weight_fee: row['韩国/马来西亚/菲律宾/新加坡/台湾/泰国'],
        });
      });

      preWeight = row['重量/kg'];
    }
  });

  return items;
}
