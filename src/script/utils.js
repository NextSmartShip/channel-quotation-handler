/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
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

export function preprocessExcelJson(json) {
  let data = clearSpecString(JSON.stringify(json));
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
