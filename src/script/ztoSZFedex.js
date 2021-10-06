/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { isIncludeHeader } from "./utils";
import { COST_MODE } from "../config/const";
import countries from "../config/countries.json";

export function getCountryZones() {
  return [
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "AS",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "AD",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "AO",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "AI",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "AG",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "AR",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "AM",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "AW",
    },
    {
      orgZone: "u",
      zone: "ZTO_SZ_FEDEX_U",
      countryCode: "AU",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "AT",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "AZ",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BS",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BH",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BD",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BB",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BY",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "BE",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BZ",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BJ",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BM",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BT",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BO",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BQ",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BW",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "BR",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "VG",
    },
    {
      orgZone: "e",
      zone: "ZTO_SZ_FEDEX_E",
      countryCode: "BN",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "BG",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BF",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "BI",
    },
    {
      orgZone: "e",
      zone: "ZTO_SZ_FEDEX_E",
      countryCode: "KH",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "CM",
    },
    {
      orgZone: "n",
      zone: "ZTO_SZ_FEDEX_N",
      countryCode: "CA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "CV",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "KY",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "TD",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "CL",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "CO",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "CG",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "CK",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "CR",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "HR",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "CW",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "CY",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "CZ",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "CI",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "CD",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "DK",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "DJ",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "DO",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "DM",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "TL",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "EC",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "EG",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "SV",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ER",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "EE",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ET",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "FO",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "FJ",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "FI",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "FR",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "GF",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "PF",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "GA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "GM",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "GE",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "DE",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "GH",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "GI",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "GR",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "GL",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "GD",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "GP",
    },
    {
      orgZone: "e",
      zone: "ZTO_SZ_FEDEX_E",
      countryCode: "GU",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "GT",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "GN",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "GY",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "HT",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "HN",
    },
    {
      orgZone: "V",
      zone: "ZTO_SZ_FEDEX_V",
      countryCode: "HK",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "HU",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "IS",
    },
    {
      orgZone: "o",
      zone: "ZTO_SZ_FEDEX_O",
      countryCode: "IN",
    },
    {
      orgZone: "t",
      zone: "ZTO_SZ_FEDEX_T",
      countryCode: "ID",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "IQ",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "IE",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "IL",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "IT",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "JM",
    },
    {
      orgZone: "p",
      zone: "ZTO_SZ_FEDEX_P",
      countryCode: "JP",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "JO",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "KZ",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "KE",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "KW",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "KG",
    },
    {
      orgZone: "e",
      zone: "ZTO_SZ_FEDEX_E",
      countryCode: "KG",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "LV",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "LB",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "LS",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "LR",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "LY",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "LI",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "LT",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "LU",
    },
    {
      orgZone: "a",
      zone: "ZTO_SZ_FEDEX_A",
      countryCode: "MO",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MK",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MG",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MW",
    },
    {
      orgZone: "q",
      zone: "ZTO_SZ_FEDEX_Q",
      countryCode: "MY",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MV",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ML",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "MT",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "MH",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "MQ",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MR",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MU",
    },
    {
      orgZone: "n",
      zone: "ZTO_SZ_FEDEX_N",
      countryCode: "MX",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "FM",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MD",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "MC",
    },
    {
      orgZone: "d",
      zone: "ZTO_SZ_FEDEX_D",
      countryCode: "MN",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "MS",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ME",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "MZ",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "NA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "NP",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "AN",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "NL",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "NC",
    },
    {
      orgZone: "u",
      zone: "ZTO_SZ_FEDEX_U",
      countryCode: "NZ",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "NI",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "NG",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "NE",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "MP",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "NO",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "OM",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "PK",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "PW",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "PS",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "PA",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "PG",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "PY",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "PE",
    },
    {
      orgZone: "s",
      zone: "ZTO_SZ_FEDEX_S",
      countryCode: "PH",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "PL",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "PT",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "QA",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "RO",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "RU",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "RW",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "RE",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "LC",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "MF",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "WS",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "SA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "SN",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "RS",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "SC",
    },
    {
      orgZone: "y",
      zone: "ZTO_SZ_FEDEX_Y",
      countryCode: "SG",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "SK",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "SI",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ZA",
    },
    {
      orgZone: "z",
      zone: "ZTO_SZ_FEDEX_Z",
      countryCode: "KR",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "ES",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "LK",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "KN",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "SX",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "VC",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "SR",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "SZ",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "SE",
    },
    {
      orgZone: "m",
      zone: "ZTO_SZ_FEDEX_M",
      countryCode: "CH",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "SY",
    },
    {
      orgZone: "X",
      zone: "ZTO_SZ_FEDEX_X",
      countryCode: "TW",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "TZ",
    },
    {
      orgZone: "r",
      zone: "ZTO_SZ_FEDEX_R",
      countryCode: "TH",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "TG",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "TO",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "TT",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "TN",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "TR",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "TC",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "VI",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "UG",
    },
    {
      orgZone: "f",
      zone: "ZTO_SZ_FEDEX_F",
      countryCode: "UA",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "AE",
    },
    {
      orgZone: "k",
      zone: "ZTO_SZ_FEDEX_K",
      countryCode: "GB",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "UY",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "UZ",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "VU",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "VE",
    },
    {
      orgZone: "b",
      zone: "ZTO_SZ_FEDEX_B",
      countryCode: "VN",
    },
    {
      orgZone: "g",
      zone: "ZTO_SZ_FEDEX_G",
      countryCode: "WF",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "YE",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ZM",
    },
    {
      orgZone: "h",
      zone: "ZTO_SZ_FEDEX_H",
      countryCode: "ZW",
    },
    {
      orgZone: "us1",
      zone: "ZTO_SZ_FEDEX_US1",
      countryCode: "US",
    },
    {
      orgZone: "us2",
      zone: "ZTO_SZ_FEDEX_US2",
      countryCode: "US",
    },
  ];
}

export function checkZtoSZFedexTemplateIsValid(json) {
  if (!json || json.length < 1) {
    return false;
  }
  const keys = Object.keys(json[0]);
  if (keys.length === 0) {
    return false;
  }

  const headers = [
    "weightkg",
    "us1",
    "us2",
    "b",
    "d",
    "e",
    "f",
    "g",
    "h",
    "k",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "y",
    "z",
  ];
  return isIncludeHeader(headers, keys);
}

export function handleZtoSZFedexExcelJson(json) {
  const items = [];

  if (!json || json.length < 1) {
    return [];
  }

  const countryZones = getCountryZones();

  let preWeight = 0;
  json.forEach((row) => {
    const startWeight = preWeight;
    const endWeight = parseFloat(row.weightkg, 10) * 1000;

    for (const key in row) {
      const countryCodes = countryZones.filter((cz) => cz.orgZone === key);
      countryCodes.forEach((cc) => {
        const findCountry = countries.data.find(
          (item) => item.code === cc.countryCode
        );

        items.push({
          mode: COST_MODE.TotalPrice,
          country_code: cc.countryCode,
          country_name: findCountry ? findCountry.name_cn : "",
          start_weight: startWeight,
          end_weight: endWeight,
          first_weight: 0,
          first_weight_fee: 0,
          unit_weight: 0,
          unit_weight_fee: row[key],
          zone: cc.zone,
        });
      });
    }
    preWeight = endWeight;
  });
  return items;
}
