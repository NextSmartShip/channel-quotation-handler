/* eslint-disable no-plusplus */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkZtoHKHTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['首1.0kg', '续1.0kg', '51-100kg', '101-300kg', '301-500kg', '501kg以上'];
  return isIncludeHeader(headers, keys);
}

export function handleZtoHKHExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const row = json[1];

  const items = [];
  items.push({
    mode: COST_MODE.ContinuedUnitPrice,
    country_code: 'HK',
    country_name: '中国香港',
    start_weight: 0,
    end_weight: 50 * 1000,
    first_weight: 1000,
    first_weight_fee: row['首1.0kg'],
    unit_weight: 1000,
    unit_weight_fee: row['续1.0kg'],
  });

  items.push({
    mode: COST_MODE.UnitPrice,
    country_code: 'HK',
    country_name: '中国香港',
    start_weight: 50 * 1000,
    end_weight: 100 * 1000,
    first_weight: 0,
    first_weight_fee: 0,
    unit_weight: 1000,
    unit_weight_fee: row['51-100kg'],
  });

  items.push({
    mode: COST_MODE.UnitPrice,
    country_code: 'HK',
    country_name: '中国香港',
    start_weight: 100 * 1000,
    end_weight: 300 * 1000,
    first_weight: 0,
    first_weight_fee: 0,
    unit_weight: 1000,
    unit_weight_fee: row['101-300kg'],
  });

  items.push({
    mode: COST_MODE.UnitPrice,
    country_code: 'HK',
    country_name: '中国香港',
    start_weight: 300 * 1000,
    end_weight: 500 * 1000,
    first_weight: 0,
    first_weight_fee: 0,
    unit_weight: 1000,
    unit_weight_fee: row['301-500kg'],
  });

  items.push({
    mode: COST_MODE.UnitPrice,
    country_code: 'HK',
    country_name: '中国香港',
    start_weight: 500 * 1000,
    end_weight: 10000 * 1000,
    first_weight: 0,
    first_weight_fee: 0,
    unit_weight: 1000,
    unit_weight_fee: row['501kg以上'],
  });

  return items;
}
