/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import axios from "axios";
import { isIncludeHeader } from "./utils";
import { COST_MODE, WMS_API_URL } from "../config/const";
import countries from "../config/countries.json";

const zoneMaps = [
  { old: "zone1", new: "ZTO_HK_DHL_1" },
  { old: "zone2", new: "ZTO_HK_DHL_2" },
  { old: "zone3", new: "ZTO_HK_DHL_3" },
  { old: "zone4", new: "ZTO_HK_DHL_4" },
  { old: "zone5", new: "ZTO_HK_DHL_5" },
  { old: "zone6", new: "ZTO_HK_DHL_6" },
  { old: "zone7", new: "ZTO_HK_DHL_7" },
  { old: "zone8", new: "ZTO_HK_DHL_8" },
  { old: "zone9", new: "ZTO_HK_DHL_9" },
  { old: "zone10", new: "ZTO_HK_DHL_10" },
  { old: "zone11", new: "ZTO_HK_DHL_11" },
  { old: "zone12", new: "ZTO_HK_DHL_12" },
  { old: "zone13", new: "ZTO_HK_DHL_13" },
  { old: "zone14", new: "ZTO_HK_DHL_14" },
  { old: "zone15", new: "ZTO_HK_DHL_15" },
  { old: "zone16", new: "ZTO_HK_DHL_16" },
  { old: "zone17", new: "ZTO_HK_DHL_17" },
  { old: "zone18", new: "ZTO_HK_DHL_18" },
  { old: "zone19", new: "ZTO_HK_DHL_19" },
  { old: "zone20", new: "ZTO_HK_DHL_10" },
  { old: "zone21", new: "ZTO_HK_DHL_21" },
  { old: "zone22", new: "ZTO_HK_DHL_22" },
  { old: "zone23", new: "ZTO_HK_DHL_23" },
  { old: "zone24", new: "ZTO_HK_DHL_24" },
  { old: "zone25", new: "ZTO_HK_DHL_25" },
  { old: "zone26", new: "ZTO_HK_DHL_26" },
  { old: "zone27", new: "ZTO_HK_DHL_27" },
  { old: "zone28", new: "ZTO_HK_DHL_28" },
  { old: "zone29", new: "ZTO_HK_DHL_29" },
  { old: "zone30", new: "ZTO_HK_DHL_30" },
];

export async function getCountryZones() {
  const response = await axios.get(
    `${WMS_API_URL}/country-zones?pageSize=-1&zone=ZTO_HK_DHL`
  );
  const responseData = response.data;
  if (!responseData || !responseData.success) {
    throw Error("Get country zone list failed");
  }
  return responseData.data;
}

export function checkZtoHkDhlTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = [
    "weightkg",
    "dus",
    "zone1",
    "zone2",
    "zone3",
    "zone4",
    "zone5",
    "zone6",
    "zone7",
    "zone8",
    "zone9",
    "zone10",
    "zone11",
    "zone12",
    "zone13",
    "zone14",
    "zone15",
    "zone16",
    "zone17",
    "zone18",
    "zone19",
    "zone20",
    "zone21",
    "zone22",
    "zone23",
    "zone24",
    "zone25",
    "zone26",
    "zone27",
    "zone28",
    "zone29",
    "zone30",
  ];
  return isIncludeHeader(headers, keys);
}

export async function handleZtoHkDhlExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }

  const countryZones = await getCountryZones();

  let preWeight = 0;
  json.forEach((row, index) => {
    const startWeight = preWeight;
    let endWeight = 0;
    let unitWeight = 1;
    // 大货；按每KG计费
    if (row.weightkg.toString().indexOf("kg") > -1) {
      const weights = row.weightkg
        .replace("kg", "")
        .replace("+", "")
        .split("-");
      if (weights.length === 2) {
        endWeight = parseFloat(weights[1], 10) * 1000;
      } else {
        endWeight = parseFloat(10000, 10) * 1000;
      }
      unitWeight = 1000;
    } else {
      endWeight = parseFloat(row.weightkg, 10) * 1000;
    }
    for (const key in row) {
      if (Number(row[key]) > 0) {
        if (key === "dus") {
          items.push({
            mode: COST_MODE.UnitPrice,
            country_code: "US",
            country_name: "美国",
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: unitWeight,
            unit_weight_fee: unitWeight === 1 ? row[key] / 1000 : row[key],
          });
        } else if (key.indexOf("zone") > -1) {
          const newZone = zoneMaps.find((z) => z.old === key).new;
          const countryCodes = countryZones.filter((cz) => cz.zone === newZone);
          countryCodes.forEach((cc) => {
            const findCountry = countries.data.find(
              (item) => item.code === cc.countryCode
            );

            items.push({
              mode: COST_MODE.UnitPrice,
              country_code: cc.countryCode,
              country_name: findCountry ? findCountry.name_cn : "",
              start_weight: startWeight,
              end_weight: endWeight,
              first_weight: 0,
              first_weight_fee: 0,
              unit_weight: unitWeight,
              unit_weight_fee: unitWeight === 1 ? row[key] / 1000 : row[key],
              zone: cc.zone,
            });
          });
        }
      }
    }
    preWeight = endWeight;
  });
  console.log("items.length: ", items.length);
  return items;
}
