/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import baierFeDexIPCountryZones from '../config/baier_fedex_ip_zones.json';
import { COST_MODE } from '../config/const';
import countries from '../config/countries.json';
import { isIncludeHeader } from './utils';

export function checkBaierFeDexIPTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ['重量/分区', '1', '2', 'a', 'c', 'd', 'k', 'l', 'm', 'n'];
  return isIncludeHeader(headers, keys);
}

export function handleBaierFeDexIPExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const countryZones = baierFeDexIPCountryZones.data;

  let preWeight = 0;
  const items = [];
  json.forEach((row) => {
    const startWeight = preWeight;
    const endWeight = parseFloat(row['重量/分区'], 10) * 1000;

    for (const key in row) {
      if (Number(row[key]) > 0) {
        const countryCodes = countryZones.filter((cz) => cz.zone === key.toLocaleUpperCase());
        countryCodes.forEach((cc) => {
          const findCountry = countries.data.find((item) => item.code === cc.countryCode);

          items.push({
            mode: COST_MODE.TotalPrice,
            country_code: cc.countryCode,
            country_name: findCountry ? findCountry.name_cn : '',
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: 0,
            unit_weight_fee: row[key].toFixed(1),
            zone: cc.zone,
          });
        });
      }
    }

    preWeight = endWeight;
  });

  return items;
}
