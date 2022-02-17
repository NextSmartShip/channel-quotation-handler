/* eslint-disable no-underscore-dangle */
import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function check17feiEUTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[1]);
  const headers = ['目的国', '重量', '处理费/item', '运费/kg'];
  return isIncludeHeader(headers, keys);
}

export function handle17feiEUExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  let prevCountry = '';
  json.forEach((row) => {
    const weights = row['重量'].replace('kg', '').split('-');
    let country = row['目的国'];
    if (country && country !== '') {
      country = country.trim();
      prevCountry = country;
    } else {
      country = prevCountry;
    }
    const code = getCountryCodeByName(country);
    const unitWeight = 1000;
    items.push({
      mode: COST_MODE.UnitPrice,
      country_code: code,
      country_name: country,
      start_weight: weights.length === 2 ? weights[0] * unitWeight : '',
      end_weight: weights.length === 2 ? weights[1] * unitWeight : '',
      unit_weight: unitWeight,
      unit_weight_fee: row['运费/kg'],
      processing_fee: row['处理费/item'],
    });
  });
  return items;
}
