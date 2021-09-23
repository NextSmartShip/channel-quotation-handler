import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkWanbTemplateIsValid(json) {
  if (!json || json.length === 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['国家', '产品代码', '重量段', '操作费rmb/pcs', '公斤重rmb/kg'];
  return isIncludeHeader(headers, keys);
}

export function handleWanbExcelJson(rows) {
  if (!rows || rows.length === 0) {
    return [];
  }
  const items = [];
  let countryName = '';
  let channelCodes = '';
  let weights = '';
  let processingFee = '';
  let unitWeightFee = '';
  let minWeight = 0;
  let zone = '';
  let prevCountryCode = '';
  rows.forEach((row) => {
    if (row['国家']) {
      countryName = row['国家'];
    }
    const countryCode = getCountryCodeByName(countryName);
    if (prevCountryCode !== countryCode) {
      minWeight = '';
      zone = '';
    }

    if (row['备注']) {
      const notes = row['备注'];
      if (notes && notes.indexOf('g起重') > -1) {
        const noteWeight = notes.split('g起重');
        if (noteWeight.length > 0) {
          minWeight = Number(noteWeight[0]);
        }
      }

      if (countryCode === 'AU' && notes) {
        if (notes.indexOf('1区报价') > -1) {
          zone = 'zone1';
        }
        if (notes.indexOf('2区报价') > -1) {
          zone = 'zone2';
        }
        if (notes.indexOf('3区报价') > -1) {
          zone = 'zone3';
        }
      }
    }

    if (row['产品代码']) {
      channelCodes = row['产品代码'].split('/');
    }
    if (row['重量段']) {
      weights = row['重量段'].replace('kg', '').split('-');
    }
    if (row['操作费rmb/pcs']) {
      processingFee = row['操作费rmb/pcs'];
    }
    if (row['公斤重rmb/kg']) {
      unitWeightFee = row['公斤重rmb/kg'];
    }
    channelCodes.forEach((code) => {
      const channelCode = code.toUpperCase();
      if (['USSLRUP', 'USPHFZ', 'USPHSLR', 'EUSLPHR', 'EUSLR', 'ECSLR'].includes(channelCode)) {
        let startWeight = weights.length === 2 ? parseFloat(weights[0], 10) * 1000 : 0;
        const endWeight = weights.length === 2 ? parseFloat(weights[1], 10) * 1000 : 0;
        if (startWeight === 0 && minWeight > 0 && minWeight < endWeight) {
          items.push({
            mode: COST_MODE.TotalPrice,
            country_code: countryCode,
            country_name: countryName,
            start_weight: startWeight,
            end_weight: minWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: 0,
            unit_weight_fee: unitWeightFee * (minWeight / 1000),
            processing_fee: processingFee,
            channel_code: channelCode,
            zone,
          });

          startWeight = minWeight + 1;
        }
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: startWeight,
          end_weight: endWeight,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1,
          unit_weight_fee: unitWeightFee / 1000,
          processing_fee: processingFee,
          channel_code: channelCode,
          zone,
        });
      }
    });
    prevCountryCode = countryCode;
  });
  return items;
}
