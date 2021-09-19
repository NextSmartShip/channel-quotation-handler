import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkYuntuTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['国家', '重量', '运费rmb/kg', '挂号费rmb/票'];
  return isIncludeHeader(headers, keys);
}

export function handleYuntuExcelJson(json) {
  if (!json || json.length === 0) {
    return [];
  }
  const items = [];
  let prevCountry = '';
  json.forEach((row) => {
    const weights = row['重量'].split('<w≤');
    let firstWeightSplit = [];
    if (weights.length >= 2 && weights[1].indexOf('起重') > -1) {
      firstWeightSplit = weights[1].split('起重');
    }
    if (weights.length >= 2 && weights[1].indexOf('首重') > -1) {
      firstWeightSplit = weights[1].split('首重');
    }
    let country = row['国家'];
    if (country && country !== '') {
      prevCountry = country.trim();
    } else {
      country = prevCountry;
    }
    const code = getCountryCodeByName(country);
    const perKgFee = row['运费rmb/kg'];
    const unitWeight = row['计费单位g'] || 1;
    let firstWeight = 0;
    if (firstWeightSplit.length > 1) {
      firstWeight = parseFloat(firstWeightSplit[1], 10);
      if (firstWeightSplit[1].indexOf('kg') > -1) {
        firstWeight /= 1;
      } else if (firstWeightSplit[1].indexOf('g') > -1) {
        firstWeight /= 1000;
      }
    }

    const startWeight = weights.length > 0 ? parseFloat(weights[0], 10) * 1000 : '';
    const endWeight = weights.length > 1 ? parseFloat(weights[1], 10) * 1000 : '';

    items.push({
      mode: firstWeight > 0 ? COST_MODE.ContinuedUnitPrice : COST_MODE.UnitPrice,
      country_code: code,
      country_name: country,
      start_weight: startWeight,
      end_weight: endWeight,
      first_weight: firstWeight * 1000,
      first_weight_fee: firstWeight > 0 ? row['运费rmb/kg'] * firstWeight : 0,
      unit_weight: unitWeight,
      unit_weight_fee: (perKgFee / 1000) * unitWeight,
      registration_fee: row['挂号费rmb/票'],
    });
  });
  return items;
}
