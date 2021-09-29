/* eslint-disable no-restricted-syntax */
import { isIncludeHeader } from "./utils";
import { COST_MODE } from "../config/const";
import countries from "../config/countries.json";

export function getCountryZones() {
  return [
    {
      org_zone: "zone1",
      zone: "ZTO_HK_DHL_1",
      countryCode: "MO",
    },
    {
      org_zone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "BN",
    },
    {
      org_zone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "KR",
    },
    {
      org_zone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "MY",
    },
    {
      org_zone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "PH",
    },
    {
      org_zone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "SG",
    },
    {
      org_zone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "TH",
    },
    {
      org_zone: "zone3",
      zone: "ZTO_HK_DHL_3",
      countryCode: "JP",
    },
    {
      org_zone: "zone4",
      zone: "ZTO_HK_DHL_4",
      countryCode: "AU",
    },
    {
      org_zone: "zone4",
      zone: "ZTO_HK_DHL_4",
      countryCode: "NZ",
    },
    {
      org_zone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "KH",
    },
    {
      org_zone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "ID",
    },
    {
      org_zone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "LA",
    },
    {
      org_zone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "VN",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "AS",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "BD",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "BT",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "CK",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "TL",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "FJ",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "GU",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "KI",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "LI",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MV",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MH",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "FM",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MM",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NR",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NP",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NC",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NU",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "PG",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MP",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "WS",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "SB",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "PF",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "TO",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "TV",
    },
    {
      org_zone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "VU",
    },
    {
      org_zone: "zone7",
      zone: "ZTO_HK_DHL_7",
      countryCode: "IN",
    },
    {
      org_zone: "zone7",
      zone: "ZTO_HK_DHL_7",
      countryCode: "LK",
    },
    {
      org_zone: "zone8",
      zone: "ZTO_HK_DHL_8",
      countryCode: "PK",
    },
    {
      org_zone: "zone9",
      zone: "ZTO_HK_DHL_9",
      countryCode: "CA",
    },
    {
      org_zone: "zone10",
      zone: "ZTO_HK_DHL_10",
      countryCode: "MX",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "BE",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "FR",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "DE",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "IT",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "MC",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "LU",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "NL",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "SM",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "GB",
    },
    {
      org_zone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "VA",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "AT",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "DK",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "FI",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "GR",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "GG",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "IE",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "JE",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "NO",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "PT",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "ES",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "SE",
    },
    {
      org_zone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "CH",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "BG",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "CY",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "EE",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "LV",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "LT",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "MT",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "SK",
    },
    {
      org_zone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "SI",
    },
    {
      org_zone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "CZ",
    },
    {
      org_zone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "HU",
    },
    {
      org_zone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "PL",
    },
    {
      org_zone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "RO",
    },
    {
      org_zone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "AD",
    },
    {
      org_zone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "IC",
    },
    {
      org_zone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "FO",
    },
    {
      org_zone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "GI",
    },
    {
      org_zone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "GL",
    },
    {
      org_zone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "IS",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "AF",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "AL",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "AM",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "BA",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "HR",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "FK",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "GE",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "KZ",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "KG",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "MD",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "ME",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "RU",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "RS",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "UA",
    },
    {
      org_zone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "UZ",
    },
    {
      org_zone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "BH",
    },
    {
      org_zone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "JO",
    },
    {
      org_zone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "KW",
    },
    {
      org_zone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "QA",
    },
    {
      org_zone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "AE",
    },
    {
      org_zone: "zone18",
      zone: "ZTO_HK_DHL_18",
      countryCode: "TR",
    },
    {
      org_zone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "IQ",
    },
    {
      org_zone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "IL",
    },
    {
      org_zone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "LB",
    },
    {
      org_zone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "OM",
    },
    {
      org_zone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "YE",
    },
    {
      org_zone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "ER",
    },
    {
      org_zone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "ET",
    },
    {
      org_zone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "KE",
    },
    {
      org_zone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "LY",
    },
    {
      org_zone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "ZA",
    },
    {
      org_zone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "UG",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "DZ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "BJ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "BW",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "BI",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "CM",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "CV",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TD",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "KM",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "CG",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "DJ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GQ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GA",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GM",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GH",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GW",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "LS",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MG",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MW",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MR",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MU",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "YT",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MA",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MZ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "NA",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "NG",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "RE",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "RW",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SN",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SC",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SO",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "XS",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SZ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TZ",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TG",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TN",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "ZM",
    },
    {
      org_zone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "ZW",
    },
    {
      org_zone: "zone23",
      zone: "ZTO_HK_DHL_23",
      countryCode: "AO",
    },
    {
      org_zone: "zone23",
      zone: "ZTO_HK_DHL_23",
      countryCode: "CD",
    },
    {
      org_zone: "zone23",
      zone: "ZTO_HK_DHL_23",
      countryCode: "CI",
    },
    {
      org_zone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "BF",
    },
    {
      org_zone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "GN",
    },
    {
      org_zone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "LR",
    },
    {
      org_zone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "ML",
    },
    {
      org_zone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "NE",
    },
    {
      org_zone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "SL",
    },
    {
      org_zone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "DO",
    },
    {
      org_zone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "HN",
    },
    {
      org_zone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "PA",
    },
    {
      org_zone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "VE",
    },
    {
      org_zone: "zone26",
      zone: "ZTO_HK_DHL_26",
      countryCode: "CL",
    },
    {
      org_zone: "zone26",
      zone: "ZTO_HK_DHL_26",
      countryCode: "CR",
    },
    {
      org_zone: "zone26",
      zone: "ZTO_HK_DHL_26",
      countryCode: "TT",
    },
    {
      org_zone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "AR",
    },
    {
      org_zone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "BR",
    },
    {
      org_zone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "JM",
    },
    {
      org_zone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "UY",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "AI",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "AG",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "AW",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BS",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BB",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BZ",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BM",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BO",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "XB",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "KY",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "CO",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "CW",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "EC",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "SV",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GF",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GD",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GP",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GT",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GY",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "HT",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "MQ",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "MN",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "MS",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "NI",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "PR",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "ST",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BL",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "XE",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "KN",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "LC",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "SX",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "VC",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "SR",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "TC",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "VG",
    },
    {
      org_zone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "VI",
    },
    {
      org_zone: "zone29",
      zone: "ZTO_HK_DHL_29",
      countryCode: "PY",
    },
    {
      org_zone: "zone30",
      zone: "ZTO_HK_DHL_30",
      countryCode: "TW",
    },
  ];
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

export function handleZtoHkDhlExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }

  const countryZones = getCountryZones();

  let preWeight = 0;
  json.forEach((row, index) => {
    const startWeight = preWeight;
    let endWeight = 0;
    let unitWeight = 0;
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
            mode: unitWeight === 0 ? COST_MODE.TotalPrice : COST_MODE.UnitPrice,
            country_code: "US",
            country_name: "美国",
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: unitWeight,
            unit_weight_fee: row[key],
          });
        } else if (key.indexOf("zone") > -1) {
          const countryCodes = countryZones.filter((cz) => cz.org_zone === key);
          countryCodes.forEach((cc) => {
            const findCountry = countries.data.find(
              (item) => item.code === cc.countryCode
            );

            items.push({
              mode:
                unitWeight === 0 ? COST_MODE.TotalPrice : COST_MODE.UnitPrice,
              country_code: cc.countryCode,
              country_name: findCountry ? findCountry.name_cn : "",
              start_weight: startWeight,
              end_weight: endWeight,
              first_weight: 0,
              first_weight_fee: 0,
              unit_weight: unitWeight,
              unit_weight_fee: row[key],
              zone: cc.zone,
            });
          });
        }
      }
    }
    preWeight = endWeight;
  });

  return items;
}
