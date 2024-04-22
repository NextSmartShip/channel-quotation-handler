/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import NP from 'number-precision';
import countries from '../config/countries.json';

export function getCountryCodeByName(name) {
  const find = countries.data.find((item) => item.name_cn === name);
  return find ? find.code : '';
}

export const ReplaceSTR = [
  / /gm,
  /[(]|[)]|[（]|[）]/gm,
  /\n|\r|\t|\b|\f/gm,
  /\r\n/gm,
  /\\n/gm,
  /\\r/gm,
  /\\t/gm,
  /\\b/gm,
  /\\f/gm,
];

export function clearSpecString(str) {
  if (str != null && str !== '') {
    ReplaceSTR.forEach((r) => {
      str = str.replace(r, '');
    });
  }
  return str;
}
export const firstUpperCase = (param) => {
  const words = param.trim().split(' ');
  return words
    .map((word) => {
      const [first, ...rest] = word;
      return first.toUpperCase() + rest.join('');
    })
    .join(' ');
};
export function preprocessExcelJson(json, clearWhiteSpace = true) {
  let data = clearWhiteSpace ? clearSpecString(JSON.stringify(json)) : JSON.stringify(json);
  if (data && data.length > 0) {
    data = data.toLowerCase();
    return JSON.parse(data);
  }
  return [];
}

export function isIncludeHeader(headers, keys) {
  const cleared = keys.map((k) => {
    return clearSpecString(k);
  });
  return headers.every((val) => cleared.includes(val));
}

export function downloadString(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export function dateFormat(date, fmt) {
  let ret;
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
  };
  for (const k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
}
export function checkEmpty(info) {
  if (!info) return false;
  let flag = true;
  Object.keys(info).forEach((key) => {
    if (!info || !info[key].length) {
      flag = false;
    }
  });
  return flag;
}
// 判断传入的值是否带小数点:
export const isDecimal = (value) => {
  return /\./.test(value);
};

// 判断入参是否全等于数字0
export const isZero = (value) => {
  return value === 0;
};
// 乘法：
export const multiply = (_value1, _value2) => {
  if (!_value1 || !_value2) return 0;
  const value = NP.times(_value1, _value2);
  return value;
};
// 加法：
export const plus = (_value1, _value2, ..._values) => {
  if ((!_value1 && !isZero(_value1)) || (!_value2 && !isZero(_value2))) {
    return !_value1 && !_value2 ? 0 : !_value1 ? _value2 : _value1;
  }
  const value = NP.plus(_value1, _value2, ..._values);
  return value;
};
// 减法：
export const minus = (_value1, _value2) => {
  if ((!_value1 && !isZero(_value1)) || (!_value2 && !isZero(_value2))) {
    return !_value1 && !_value2 ? 0 : !_value1 ? _value2 : _value1;
  }
  const value = NP.minus(_value1, _value2);
  return value;
};
