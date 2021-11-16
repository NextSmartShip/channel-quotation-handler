/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { COST_MODE } from '../config/const';
import { isIncludeHeader } from './utils';

export function checkZtoCtwcTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['区域/重量段', '路线', '0-3kg文件2kg内', '4-10kg', '11-50kg'];
  return isIncludeHeader(headers, keys);
}

export function handleZtoCtwcExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }
  // 普货
  json.forEach((row) => {
    if (row['0-3kg文件2kg内']) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'TW',
        country_name: row['区域/重量段'],
        start_weight: 0,
        end_weight: 3 * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['0-3kg文件2kg内'],
        channel_code: row['路线'].toUpperCase(),
      });
    }
    if (row['4-10kg']) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'TW',
        country_name: row['区域/重量段'],
        start_weight: 3 * 1000,
        end_weight: 10 * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['4-10kg'],
        channel_code: row['路线'].toUpperCase(),
      });
    }
    if (row['11-50kg']) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'TW',
        country_name: row['区域/重量段'],
        start_weight: 10 * 1000,
        end_weight: 50 * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['11-50kg'],
        channel_code: row['路线'].toUpperCase(),
      });
    }

    // 带电
    if (row['0-3kg文件2kg内']) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'TW',
        country_name: row['区域/重量段'],
        start_weight: 0,
        end_weight: 3 * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['0-3kg文件2kg内'] + 2,
        channel_code: `${row['路线'].toUpperCase()} 带电`,
      });
    }
    if (row['4-10kg']) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'TW',
        country_name: row['区域/重量段'],
        start_weight: 3 * 1000,
        end_weight: 10 * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['4-10kg'] + 2,
        channel_code: `${row['路线'].toUpperCase()} 带电`,
      });
    }
    if (row['11-50kg']) {
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: 'TW',
        country_name: row['区域/重量段'],
        start_weight: 10 * 1000,
        end_weight: 20 * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 1000,
        unit_weight_fee: row['11-50kg'] + 2,
        channel_code: `${row['路线'].toUpperCase()} 带电`,
      });
    }
  });
  return items;
}
