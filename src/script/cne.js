/* eslint-disable no-param-reassign */
import { COST_MODE } from "../config/const";
import { getCountryCodeByName, isIncludeHeader } from "./utils";

export function checkCneTemplateIsValid(json) {
  if (!json || json.length === 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }
  const headers = [
    "路向国",
    "包裹处理费rmb/票",
    "包裹运费rmb/kg",
    "重量段kg",
    "参考时效工作日",
    "旺季参考时效工作日",
    "尺寸限制cm",
    "计泡标准cm",
    "计泡系数",
    "渠道状态",
  ];
  return isIncludeHeader(headers, keys);
}

export function handleCneExcelJson(rows) {
  if (!rows || rows.length === 0) {
    return [];
  }
  const items = [];
  rows.forEach((row, index) => {
    if (!row["路向国"]) {
      row["路向国"] = rows[index - 1]["路向国"];
      row["渠道状态"] = rows[index - 1]["渠道状态"];
    }
    if (row["渠道状态"] === "正常") {
      const weights = row["重量段kg"].replace("kg", "").split("-");
      if (row["路向国"] === "日本") {
        items.push({
          mode: COST_MODE.ContinuedUnitPrice,
          country_code: getCountryCodeByName(row["路向国"]),
          country_name: row["路向国"],
          start_weight:
            weights.length === 2 ? parseFloat(weights[0], 10) * 1000 : "",
          end_weight:
            weights.length === 2 ? parseFloat(weights[1], 10) * 1000 : "",
          first_weight: 500,
          first_weight_fee: row["包裹处理费rmb/票"],
          unit_weight: 500,
          unit_weight_fee: row["包裹运费rmb/kg"],
        });
      } else {
        let firstWeight = 0;
        let firstWeightFee = 0;
        const countryCode = getCountryCodeByName(row["路向国"]);
        const startWeight =
          weights.length === 2
            ? Math.round(parseFloat(weights[0], 10) * 1000)
            : "";
        let mode = COST_MODE.UnitPrice;
        if (["US", "MX", "CA"].includes(countryCode) && startWeight === 0) {
          firstWeight = 50;
          mode = COST_MODE.ContinuedUnitPrice;
          firstWeightFee = (firstWeight / 1000) * row["包裹运费rmb/kg"];
        }
        items.push({
          mode,
          country_code: countryCode,
          country_name: row["路向国"],
          start_weight: startWeight,
          end_weight:
            weights.length === 2 ? parseFloat(weights[1], 10) * 1000 : "",
          first_weight: firstWeight,
          first_weight_fee: firstWeightFee,
          unit_weight: 1,
          unit_weight_fee: parseFloat(row["包裹运费rmb/kg"]) / 1000,
          processing_fee: row["包裹处理费rmb/票"],
        });
      }
    }
  });

  return items;
}
