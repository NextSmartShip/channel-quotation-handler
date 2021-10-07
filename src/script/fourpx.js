/* eslint-disable no-underscore-dangle */
import { COST_MODE } from "../config/const";
import { getCountryCodeByName, isIncludeHeader } from "./utils";

export function check4PXTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const headers = [
    "国家",
    "重量段g",
    "收费标准",
    "__empty",
  ]; // "序号","产品代码", "尺寸","备注", "时效（工作日）"
  const keys = Object.keys(json[1]);
  return isIncludeHeader(headers, keys);
}

export function handle4pxExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }
  const items = [];
  let prevCountry = "";
  json.forEach((row, index) => {
    if (index > 0) {
      const weights = row["重量段g"].split("-");
      let country = row["国家"];
      if (country && country !== "") {
        country = country.trim();
        prevCountry = country;
      } else {
        country = prevCountry;
      }
      const code = getCountryCodeByName(country);
      const unitWeight = row["计费单位g"] || 1;
      items.push({
        mode: COST_MODE.UnitPrice,
        country_code: code,
        country_name: row["国家"].trim(),
        start_weight: weights.length === 2 ? parseInt(weights[0], 10) : "",
        end_weight: weights.length === 2 ? parseInt(weights[1], 10) : "",
        unit_weight: unitWeight,
        unit_weight_fee: (row["收费标准"] / 1000) * unitWeight,
        processing_fee: row.__empty,
      });
    }
  });
  return items;
}
