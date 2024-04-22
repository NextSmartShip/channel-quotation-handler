/* eslint-disable no-restricted-syntax */

import { COST_MODE } from '../config/const';
import { checkEmpty, firstUpperCase, isDecimal, isIncludeHeader, minus, multiply } from './utils';

export function checkGaoHangDaTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const headers = ['kg', '1区', '5区', '6区', '7区', '8区', '9区', '10区', '11区', '12区', '13区', '14区', '15区']; // "序号","产品代码", "尺寸","备注", "时效（工作日）"
  const keys = Object.keys(json[0]);
  return isIncludeHeader(headers, keys);
}
export function getDefaultSheetTableHeader() {
  return {
    country_code: '',
    country_name: '',
    start_weight: '',
    end_weight: '',
    first_weight: '',
    first_weight_fee: '',
    unit_weight: '',
    unit_weight_fee: '',
    fuel_fee: '',
    processing_fee: '',
    registration_fee: '',
    misc_fee: '',
    item: {
      mod: '',
    },
    channel_code: '',
    zone: '',
  };
}

// 当传入的值为数字或者字符串数字时的处理方式：
function formatStrNumberOrNumber(v) {
  const value = Number(v);
  if (Number.isNaN(value)) return 0;
  const floorNumber = Math.floor(v);
  if (floorNumber === 0) return 0;
  return isDecimal(v) ? multiply(floorNumber, 1000) : multiply(minus(floorNumber, 0.5), 1000);
}

function formatStartWeight(_weight) {
  if (_weight === 0) return 0;
  let start_weight = 0;
  let end_weight = 0;
  if (typeof _weight === 'string') {
    if (_weight.indexOf('-') !== -1) {
      const [_start_weight, _endWeight] = _weight.split('-');
      start_weight = multiply(Number(_start_weight), 1000);
      end_weight = Number(_endWeight);
    } else if (_weight.indexOf('>') !== -1) {
      const [_, _start_weight] = _weight.split('>');
      start_weight = multiply(Number(_start_weight), 1000);
    } else {
      start_weight = formatStrNumberOrNumber(_weight);
      end_weight = Number(_weight);
    }
  } else {
    start_weight = formatStrNumberOrNumber(_weight);
    end_weight = Number(_weight);
  }
  const endWeight = end_weight === 0 ? '-' : multiply(end_weight, 1000);
  return {
    start_weight,
    end_weight: endWeight,
  };
}
// 根据传入重量（g）是否是单价模式:
function isUnitPrice(weight) {
  return weight > 20000;
}
function hadSymble(_weight) {
  const weight = _weight.toString();
  return weight.indexOf('>') !== -1 || weight.indexOf('-') !== -1;
}
function getUnitWeightForUnitPrice(weight) {
  const isSymble = hadSymble(weight);
  return isSymble ? 1000 : isUnitPrice(weight) ? 1000 : 1;
}
function getModeForUnitPrice(weight) {
  const isSymble = hadSymble(weight);
  return isSymble ? COST_MODE.UnitPrice : isUnitPrice(weight) ? COST_MODE.UnitPrice : COST_MODE.TotalPrice;
}

export function handleJdUpsExcelJson(info) {
  const isContinues = checkEmpty(info);
  if (!isContinues) return [];
  const sheetKeys = Object.keys(info);
  const areasKey = sheetKeys[0];
  const quotationKey = sheetKeys[1];
  const areasRecords = info[areasKey];
  const quotationsRecords = info[quotationKey];
  const parseDatas = quotationsRecords.slice(1, areasRecords.length);
  // 拼凑国家映射表：
  const countryZones = areasRecords.slice(2, areasRecords.length).map((row) => {
    const _keys = Object.keys(row);
    return {
      countryCode: row[_keys[0]].toUpperCase(),
      countryName: firstUpperCase(row[_keys[1]]),
      zone: row[_keys[2]],
    };
  });

  const items = [];
  // 拼凑：国家代码、国家名称
  // areasRecords.forEach((row) => { });
  parseDatas.forEach((row) => {
    const zone_map = {
      11: row.zones,
      12: row.__empty,
      13: row.__empty_1,
      14: row.__empty_2,
      15: row.__empty_3,
      16: row.__empty_4,
      17: row.__empty_5,
      18: row.__empty_6,
      19: row.__empty_7,
      20: row.__empty_8,
    };
    Object.entries(zone_map).forEach((zoneInfo) => {
      // zoneInfo: [zone, fee]
      const zone = zoneInfo[0];
      const unit_weight_fee = zoneInfo[1] === 'n/a' ? zoneInfo[1].toUpperCase() : zoneInfo[1];
      const contries = countryZones.filter((cz) => Number(cz.zone) === Number(zone));
      const { start_weight, end_weight } = formatStartWeight(row.weight);
      // console.log('重量（起始、结束）: ', start_weight, end_weight);

      const unit_weight = getUnitWeightForUnitPrice(row.weight);
      const mode = getModeForUnitPrice(row.weight);
      contries.forEach(({ countryCode, countryName, zone: z }) => {
        items.push({
          mode,
          country_code: countryCode,
          country_name: countryName,
          start_weight,
          end_weight,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight,
          unit_weight_fee,
          zone: z,
        });
      });
    });
  });
  return items;
}
