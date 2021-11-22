import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkHsdEPostTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['路向', '处理费元/件', '运费元/千克', '起寄重量'];

  return isIncludeHeader(headers, keys);
}

export function handleHsdEPostExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];

  let countryCode = '';
  let countryName = '';
  json.forEach((row) => {
    let startWeight = 0;
    let endWeight = 2 * 1000;
    const firstWeight = row['起寄重量'];
    if (row['路向']) {
      countryCode = getCountryCodeByName(row['路向']);
      countryName = row['路向'];
    }
    if (countryCode === 'GB') {
      if (row['起寄重量'] === 1) {
        startWeight = 0;
        endWeight = 499;
      }
      if (row['起寄重量'] === 500) {
        startWeight = 499;
        endWeight = 1999;
      }
      if (row['起寄重量'] === 2000) {
        startWeight = 1999;
      }
    }
    items.push({
      mode: COST_MODE.ContinuedUnitPrice,
      country_code: countryCode,
      country_name: countryName,
      start_weight: startWeight,
      end_weight: endWeight,
      first_weight: firstWeight,
      first_weight_fee: ((row['运费元/千克'] / 1000) * firstWeight).toFixed(5),
      unit_weight: 1,
      unit_weight_fee: (row['运费元/千克'] / 1000).toFixed(5),
      processing_fee: row['处理费元/件'],
      channel_code: '',
    });
  });

  return items;
}
