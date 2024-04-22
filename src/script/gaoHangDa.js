import { COST_MODE } from '../config/const';
import { checkEmpty, firstUpperCase, isDecimal, minus, multiply } from './utils';

export function checkGaoHangDaTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  return true;
  // const headers = ['kg', '1区', '5区', '6区', '7区', '8区', '9区', '10区', '11区', '12区', '13区', '14区', '15区']; // "序号","产品代码", "尺寸","备注", "时效（工作日）"
  // const keysMap = Object.keys(json);
  // const priceKey = keysMap[0];
  // const areaKey = keysMap[1];
  // console.log('json[0]: ', json, priceKey, areaKey);
  // if (!priceKey || !areaKey) return false;
  // return isIncludeHeader(headers, keys);
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
// 最关键的处理函数：
// !!! 当传入的值为数字或者字符串数字时的处理方式 !!!：
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
function getUnitWeightForUnitPrice() {
  return COST_MODE.TotalPrice;
}
function getModeForUnitPrice() {
  return COST_MODE.TotalPrice;
}

export function handleGaoHangDaUpsExcelJson(info, error_cb) {
  try {
    const isContinues = checkEmpty(info);
    if (!isContinues) return [];
    const sheetKeys = Object.keys(info);
    const quotationKey = sheetKeys[0];
    const areasKey = sheetKeys[1];
    const areasRecords = info[areasKey];
    const quotationsRecords = info[quotationKey];
    const parseDatas = quotationsRecords;
    // 拼凑国家映射表：
    const countryZones = areasRecords.map((row) => {
      const _keys = Object.keys(row);
      return {
        countryCode: row[_keys[3]].toUpperCase(),
        countryName: firstUpperCase(row[_keys[1]]),
        zone: row[_keys[2]],
      };
    });

    const items = [];
    // 拼凑：国家代码、国家名称
    // areasRecords.forEach((row) => { });
    parseDatas.forEach((row) => {
      const { kg } = row;
      const currentWeightZoneFeeMap = {
        1: row['1区'],
        5: row['5区'],
        6: row['6区'],
        7: row['7区'],
        8: row['8区'],
        9: row['9区'],
        10: row['10区'],
        11: row['11区'],
        12: row['12区'],
        13: row['13区'],
        14: row['14区'],
      };
      Object.entries(currentWeightZoneFeeMap).forEach((zoneInfo) => {
        // zoneInfo: [zone, fee]
        console.log('zoneInfo: ', zoneInfo, zoneInfo[1]);

        const zone = zoneInfo[0];
        const fee = zoneInfo[1];
        const unit_weight_fee = fee === 'n/a' ? fee.toUpperCase() : fee;
        const contries = countryZones.filter((cz) => Number(cz.zone) === Number(zone));
        const { start_weight, end_weight } = formatStartWeight(kg);
        // console.log('重量（起始、结束）: ', start_weight, end_weight);
        const unit_weight = getUnitWeightForUnitPrice();
        const mode = getModeForUnitPrice();
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
  } catch (error) {
    console.log('error: ', error);
    return error_cb && typeof error_cb === 'function' && error_cb(error);
  }
}
