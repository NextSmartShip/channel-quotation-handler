import { COST_MODE } from "../config/const";
import { getCountryCodeByName, isIncludeHeader } from "./utils";

export function checkUflTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = ["国家", "参考时效", "重量", "运费rmb/kg", "挂号费rmb/票"];
  return isIncludeHeader(headers, keys);
}

export function handleUflExcelJson(json) {
  if (!json || json.length < 3) {
    return [];
  }

  const items = [];
  let prevCountry = "";
  json.forEach((row, index) => {
    let country = row["国家"];
    if (country && country !== "") {
      prevCountry = country.trim();
    } else {
      country = prevCountry;
    }
    const code = getCountryCodeByName(country);
    const weights = row["重量"].replace("kg", "").split("-");
    let firstWeight = 0;
    let firstWeightFee = 0;
    let startWeight =
      weights.length === 2 ? parseFloat(weights[0], 10) * 1000 : "";
    let mode = COST_MODE.UnitPrice;
    if (index === 0) {
      startWeight = 0;
      firstWeight = 100;
      firstWeightFee = (firstWeight / 1000) * row["运费rmb/kg"];
      mode = COST_MODE.ContinuedUnitPrice;
    }
    items.push({
      mode,
      country_code: code,
      country_name: country,
      start_weight: startWeight,
      end_weight: weights.length === 2 ? parseFloat(weights[1], 10) * 1000 : "",
      first_weight: firstWeight,
      first_weight_fee: firstWeightFee,
      unit_weight: 1,
      unit_weight_fee: row["运费rmb/kg"] / 1000,
      registration_fee: row["挂号费rmb/票"],
    });
  });
  return items;
}
