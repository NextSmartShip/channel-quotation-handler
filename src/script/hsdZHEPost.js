import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkHsdZHEPostTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['路向', '处理费元/件', '元/千克', '限重'];
  return isIncludeHeader(headers, keys);
}

export function handleHsdZHEPostExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const items = [];
  let countryCode = '';
  let countryName = '';
  json.forEach((row) => {
    let modeType = COST_MODE.UnitPrice;
    let startWeight = 0;
    const endWeight = row['限重'];
    let firstWeight = 0;
    if (row['路向'] && row['路向'].indexOf('巴西') > -1) {
      countryCode = 'BR';
      countryName = row['路向'];
    } else if (row['路向'] && row['路向'].indexOf('新西兰') > -1) {
      countryCode = 'NZ';
      countryName = row['路向'];
    } else if (row['路向']) {
      countryCode = getCountryCodeByName(row['路向']);
      countryName = row['路向'];
    }
    if (countryCode === 'GB') {
      if (row['限重'] === 499) {
        startWeight = 0;
      }
      if (row['限重'] === 1999) {
        startWeight = 499;
      }
      if (row['限重'] === 5000) {
        startWeight = 1999;
      }
    }
    if (['BR', 'NZ'].includes(countryCode)) {
      const fWeight = row['路向'].match(/\d+/g);
      if (fWeight && fWeight.length > 0) {
        firstWeight = Number(fWeight[0]);
        modeType = COST_MODE.ContinuedUnitPrice;
      }
    }
    items.push({
      mode: modeType,
      country_code: countryCode,
      country_name: countryName,
      start_weight: startWeight,
      end_weight: endWeight,
      first_weight: firstWeight,
      first_weight_fee: ((row['元/千克'] / 1000) * firstWeight).toFixed(5),
      unit_weight: 1,
      unit_weight_fee: (row['元/千克'] / 1000).toFixed(5),
      processing_fee: row['处理费元/件'],
      channel_code: '',
    });
  });

  return items;
}
