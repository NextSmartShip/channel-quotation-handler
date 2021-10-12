/* eslint-disable no-restricted-syntax */
import { isIncludeHeader } from "./utils";
import { COST_MODE } from "../config/const";
import countries from "../config/countries.json";

export function getCountryZones() {
  return [
    {
      orgZone: "dus",
      zone: "",
      countryCode: "US",
    },
    {
      orgZone: "zone1",
      zone: "ZTO_HK_DHL_1",
      countryCode: "MO",
    },
    {
      orgZone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "BN",
    },
    {
      orgZone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "KR",
    },
    {
      orgZone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "MY",
    },
    {
      orgZone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "PH",
    },
    {
      orgZone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "SG",
    },
    {
      orgZone: "zone2",
      zone: "ZTO_HK_DHL_2",
      countryCode: "TH",
    },
    {
      orgZone: "zone3",
      zone: "ZTO_HK_DHL_3",
      countryCode: "JP",
    },
    {
      orgZone: "zone4",
      zone: "ZTO_HK_DHL_4",
      countryCode: "AU",
    },
    {
      orgZone: "zone4",
      zone: "ZTO_HK_DHL_4",
      countryCode: "NZ",
    },
    {
      orgZone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "KH",
    },
    {
      orgZone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "ID",
    },
    {
      orgZone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "LA",
    },
    {
      orgZone: "zone5",
      zone: "ZTO_HK_DHL_5",
      countryCode: "VN",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "AS",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "BD",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "BT",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "CK",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "TL",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "FJ",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "GU",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "KI",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "LI",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MV",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MH",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "FM",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MM",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NR",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NP",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NC",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "NU",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "PG",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "MP",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "WS",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "SB",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "PF",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "TO",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "TV",
    },
    {
      orgZone: "zone6",
      zone: "ZTO_HK_DHL_6",
      countryCode: "VU",
    },
    {
      orgZone: "zone7",
      zone: "ZTO_HK_DHL_7",
      countryCode: "IN",
    },
    {
      orgZone: "zone7",
      zone: "ZTO_HK_DHL_7",
      countryCode: "LK",
    },
    {
      orgZone: "zone8",
      zone: "ZTO_HK_DHL_8",
      countryCode: "PK",
    },
    {
      orgZone: "zone9",
      zone: "ZTO_HK_DHL_9",
      countryCode: "CA",
    },
    {
      orgZone: "zone10",
      zone: "ZTO_HK_DHL_10",
      countryCode: "MX",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "BE",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "FR",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "DE",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "IT",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "MC",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "LU",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "NL",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "SM",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "GB",
    },
    {
      orgZone: "zone11",
      zone: "ZTO_HK_DHL_11",
      countryCode: "VA",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "AT",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "DK",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "FI",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "GR",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "GG",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "IE",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "JE",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "NO",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "PT",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "ES",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "SE",
    },
    {
      orgZone: "zone12",
      zone: "ZTO_HK_DHL_12",
      countryCode: "CH",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "BG",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "CY",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "EE",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "LV",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "LT",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "MT",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "SK",
    },
    {
      orgZone: "zone13",
      zone: "ZTO_HK_DHL_13",
      countryCode: "SI",
    },
    {
      orgZone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "CZ",
    },
    {
      orgZone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "HU",
    },
    {
      orgZone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "PL",
    },
    {
      orgZone: "zone14",
      zone: "ZTO_HK_DHL_14",
      countryCode: "RO",
    },
    {
      orgZone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "AD",
    },
    {
      orgZone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "IC",
    },
    {
      orgZone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "FO",
    },
    {
      orgZone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "GI",
    },
    {
      orgZone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "GL",
    },
    {
      orgZone: "zone15",
      zone: "ZTO_HK_DHL_15",
      countryCode: "IS",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "AF",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "AL",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "AM",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "BA",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "HR",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "FK",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "GE",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "KZ",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "KG",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "MD",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "ME",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "RU",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "RS",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "UA",
    },
    {
      orgZone: "zone16",
      zone: "ZTO_HK_DHL_16",
      countryCode: "UZ",
    },
    {
      orgZone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "BH",
    },
    {
      orgZone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "JO",
    },
    {
      orgZone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "KW",
    },
    {
      orgZone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "QA",
    },
    {
      orgZone: "zone17",
      zone: "ZTO_HK_DHL_17",
      countryCode: "AE",
    },
    {
      orgZone: "zone18",
      zone: "ZTO_HK_DHL_18",
      countryCode: "TR",
    },
    {
      orgZone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "IQ",
    },
    {
      orgZone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "IL",
    },
    {
      orgZone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "LB",
    },
    {
      orgZone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "OM",
    },
    {
      orgZone: "zone19",
      zone: "ZTO_HK_DHL_19",
      countryCode: "YE",
    },
    {
      orgZone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "ER",
    },
    {
      orgZone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "ET",
    },
    {
      orgZone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "KE",
    },
    {
      orgZone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "LY",
    },
    {
      orgZone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "ZA",
    },
    {
      orgZone: "zone21",
      zone: "ZTO_HK_DHL_21",
      countryCode: "UG",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "DZ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "BJ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "BW",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "BI",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "CM",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "CV",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TD",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "KM",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "CG",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "DJ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GQ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GA",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GM",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GH",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "GW",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "LS",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MG",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MW",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MR",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MU",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "YT",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MA",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "MZ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "NA",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "NG",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "RE",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "RW",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SN",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SC",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SO",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "XS",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "SZ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TZ",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TG",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "TN",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "ZM",
    },
    {
      orgZone: "zone22",
      zone: "ZTO_HK_DHL_22",
      countryCode: "ZW",
    },
    {
      orgZone: "zone23",
      zone: "ZTO_HK_DHL_23",
      countryCode: "AO",
    },
    {
      orgZone: "zone23",
      zone: "ZTO_HK_DHL_23",
      countryCode: "CD",
    },
    {
      orgZone: "zone23",
      zone: "ZTO_HK_DHL_23",
      countryCode: "CI",
    },
    {
      orgZone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "BF",
    },
    {
      orgZone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "GN",
    },
    {
      orgZone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "LR",
    },
    {
      orgZone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "ML",
    },
    {
      orgZone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "NE",
    },
    {
      orgZone: "zone24",
      zone: "ZTO_HK_DHL_24",
      countryCode: "SL",
    },
    {
      orgZone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "DO",
    },
    {
      orgZone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "HN",
    },
    {
      orgZone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "PA",
    },
    {
      orgZone: "zone25",
      zone: "ZTO_HK_DHL_25",
      countryCode: "VE",
    },
    {
      orgZone: "zone26",
      zone: "ZTO_HK_DHL_26",
      countryCode: "CL",
    },
    {
      orgZone: "zone26",
      zone: "ZTO_HK_DHL_26",
      countryCode: "CR",
    },
    {
      orgZone: "zone26",
      zone: "ZTO_HK_DHL_26",
      countryCode: "TT",
    },
    {
      orgZone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "AR",
    },
    {
      orgZone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "BR",
    },
    {
      orgZone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "JM",
    },
    {
      orgZone: "zone27",
      zone: "ZTO_HK_DHL_27",
      countryCode: "UY",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "AI",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "AG",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "AW",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BS",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BB",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BZ",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BM",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BO",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "XB",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "KY",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "CO",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "CW",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "EC",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "SV",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GF",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GD",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GP",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GT",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "GY",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "HT",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "MQ",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "MN",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "MS",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "NI",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "PR",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "ST",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "BL",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "XE",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "KN",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "LC",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "SX",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "VC",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "SR",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "TC",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "VG",
    },
    {
      orgZone: "zone28",
      zone: "ZTO_HK_DHL_28",
      countryCode: "VI",
    },
    {
      orgZone: "zone29",
      zone: "ZTO_HK_DHL_29",
      countryCode: "PY",
    },
    {
      orgZone: "zone30",
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
  json.forEach((row) => {
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
        const countryCodes = countryZones.filter((cz) => cz.orgZone === key);
        countryCodes.forEach((cc) => {
          let surcharge = 0;
          let warehousingFee = 0;
          const findCountry = countries.data.find(
            (item) => item.code === cc.countryCode
          );

          if (unitWeight === 0) {
            if (cc.countryCode !== "MO") {
              if (["AU", "NZ"].includes(cc.countryCode)) {
                surcharge = Math.ceil(endWeight / 1000) * 18;
              } else {
                surcharge = Math.ceil(endWeight / 1000) * 8;
              }
            }
            warehousingFee = Math.ceil(endWeight / 1000) * 7;
          }

          items.push({
            mode: unitWeight === 0 ? COST_MODE.TotalPrice : COST_MODE.UnitPrice,
            country_code: cc.countryCode,
            country_name: findCountry ? findCountry.name_cn : "",
            start_weight: startWeight,
            end_weight: endWeight,
            first_weight: 0,
            first_weight_fee: 0,
            unit_weight: unitWeight,
            unit_weight_fee: row[key] + surcharge + warehousingFee,
            zone: cc.zone,
          });
        });
      }
    }
    preWeight = endWeight;
  });

  return items;
}
