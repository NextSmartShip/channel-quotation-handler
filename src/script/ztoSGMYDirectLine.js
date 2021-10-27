/* eslint-disable no-underscore-dangle */
import { COST_MODE } from '../config/const';
import { getCountryCodeByName, isIncludeHeader } from './utils';

export function checkZtoSGMYDirectLineTemplateIsValid(json) {
  if (!json || json.length < 1 || Object.keys(json[0]).length === 0 || Object.keys(json[1]).length === 0) return false;

  const headers = ['0.5-5kg包裹', '__empty'];
  const headers1 = [
    '服务标准',
    '请正确备注服务路线代码',
    '0.5-5kg包裹',
    '__empty',
    '5.1-10kg',
    '11-20kg',
    '21-70kg',
    '71-200kg',
    '201-300kg',
    '301-500kg',
    '500kg以上'
  ];
  return isIncludeHeader(headers, Object.keys(json[0])) && isIncludeHeader(headers1, Object.keys(json[1]));
}

export function handleZtoSGMYDirectLineExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  json.forEach((row, index) => {
    if (index > 0) {
      let countryName = '';
      if (row['服务标准'] && row['服务标准'].indexOf('新加坡') > -1) {
        countryName = '新加坡';
      }
      if (row['服务标准'] && row['服务标准'].indexOf('马来西亚') > -1) {
        countryName = '马来西亚';
      }
      const countryCode = getCountryCodeByName(countryName);
      const channelCode = row['请正确备注服务路线代码'].toUpperCase();
      if (row['0.5-5kg包裹']) {
        items.push({
          mode: COST_MODE.ContinuedUnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 0,
          end_weight: 5 * 1000,
          first_weight: 500,
          first_weight_fee: row['0.5-5kg包裹'],
          unit_weight: 500,
          unit_weight_fee: row.__empty,
          channel_code: channelCode
        });
      }
      if (row['5.1-10kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 5 * 1000,
          end_weight: 10 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['5.1-10kg'],
          channel_code: channelCode
        });
      }
      if (row['11-20kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 10 * 1000,
          end_weight: 20 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['11-20kg'],
          channel_code: channelCode
        });
      }

      if (row['21-70kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 20 * 1000,
          end_weight: 70 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['21-70kg'],
          channel_code: channelCode
        });
      }

      if (row['71-200kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 70 * 1000,
          end_weight: 200 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['71-200kg'],
          channel_code: channelCode
        });
      }
      if (row['201-300kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 200 * 1000,
          end_weight: 300 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['201-300kg'],
          channel_code: channelCode
        });
      }
      if (row['301-500kg']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 300 * 1000,
          end_weight: 500 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['301-500kg'],
          channel_code: channelCode
        });
      }
      if (row['500kg以上']) {
        items.push({
          mode: COST_MODE.UnitPrice,
          country_code: countryCode,
          country_name: countryName,
          start_weight: 500 * 1000,
          end_weight: 10000 * 1000,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 1000,
          unit_weight_fee: row['500kg以上'],
          channel_code: channelCode
        });
      }
    }
  });
  return items;
}
