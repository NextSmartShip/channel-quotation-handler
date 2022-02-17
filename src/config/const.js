export const channelTemplateList = [
  {
    name: '4px',
    template: '4px',
  },
  {
    name: '云途',
    template: 'yuntu',
  },
  {
    name: '中通 - 澳洲专线',
    template: 'zto_au',
  },
  {
    name: '中通 - 新马专线',
    template: 'zto_sg_my',
  },
  {
    name: '中通 - AUPOST-ZX',
    template: 'zto_au_post_zx',
  },
  {
    name: '递一国际全球特惠(*日本为续单价模式)',
    template: 'cne',
  },
  {
    name: 'WANB 万邦速达',
    template: 'wanb',
  },
  {
    name: 'UBI',
    template: 'UBI',
  },
  {
    name: 'UFL',
    template: 'ufl',
  },
  {
    name: '中通 - 香港DHL',
    template: 'zto_hk_dhl',
  },
  {
    name: '中通 - 深圳FedEx小货',
    template: 'zto_sz_fedex',
  },
  {
    name: 'DHL-洛杉矶ECOM',
    template: 'dhl_lax_ecom',
  },
  {
    name: '中通 - HKH',
    template: 'zto_hkh',
  },
  {
    name: '中通 - 台湾专线CTWC',
    template: 'zto_ctwc',
  },
  {
    name: '乐天 - 加拿大特快专线(普货/带电)',
    template: 'ltian_ca_exp',
  },
  {
    name: '乐天 - 加拿大敏感产品',
    template: 'ltian_ca_sens',
  },
  {
    name: '寰世达 - 长沙邮政航空小包',
    template: 'hsd_cs_post',
  },
  {
    name: '寰世达 - E邮宝',
    template: 'hsd_epost',
  },
  {
    name: '寰世达 - EMS',
    template: 'hsd_ems',
  },
  {
    name: '寰世达 - 荷兰邮政挂号小包',
    template: 'hsd_nl_post',
  },
  {
    name: '寰世达 - 珠海E邮宝-特货/纯电',
    template: 'hsd_zh_epost',
  },
  {
    name: 'K5 韩润',
    template: 'k5_hr',
  },
  {
    name: '佰尔 - UPS红单欧美小货价',
    template: 'baier_ups_om',
  },
  {
    name: '佰尔 - UPS-红单C价',
    template: 'baier_ups_hdc',
  },
  {
    name: '佰尔 - UPS-日本促销价',
    template: 'baier_ups_jp',
  },
  {
    name: '佰尔 - FedEx IP小货价',
    template: 'baier_fedex_ip',
  },
  {
    name: '华翰 - 华翰全球专线挂号-特货',
    template: 'huahan_global',
  },
  {
    name: '华翰 - 华邮通特货Plus',
    template: 'huahan_hyghplus',
  },
  {
    name: '华翰 - 华翰E特快',
    template: 'huahan_express',
  },
  {
    name: '黑猫 - 日本小包',
    template: 'heimao_jp',
  },
  {
    name: '润百 - 百邮通-B',
    template: 'runbai_bytb',
  },
  {
    name: '皇家 - 美国纯电专线（USPS-BA）',
    template: 'pfc_usps_ba',
  },
  {
    name: '皇家 - 加拿大纯电专线（CAEXPRESS-B）',
    template: 'pfc_ca_exp_b',
  },
  {
    name: '一起飞 - 欧洲空运 免泡专线（普货/带电）',
    template: '17fei_eu',
  },
  {
    name: '比邻美国专线 - 美国小包-普货',
    template: 'blus_busp',
  },
];

export const COST_MODE = {
  TotalPrice: 1, // 总价模式 eg: 1-3kg  10元， 3-10kg  30元
  UnitPrice: 2, // 单价模式(取整) eg: 1-3ky, 5元/kg，【不足1kg按1kg计算】
  ContinuedUnitPrice: 3, // 续单价模式(取整)， 首重+续重 【不足1kg按1kg计算】
  // TotalOrUnitPrice: 4 // 总价或单价模式(取整) eg <=2kg 按10元计算， >2kg 按8元/KG  2.5=3*8=24元 【不足1kg按1kg计算】
  // UnitPriceNoCeil: 5, // 单价模式(不取整) 5元/kg, = 0.5 * 5 换算成按1g取整 => 500*0.005
  // ContinuedUnitPriceNoCeil: 6, // 续单价模式 (不取整) eg: 0.5kg 3元，0-3kg 5元/kg  2.8=3元 + (2.8-0.5)*5元=3+2.3*5=14.5元
  // TotalOrUnitPriceNoCeil: 7 // 总价或单价模式 (不取整) eg <=2kg 按10元计算， >2kg 按8元/KG  2.5=2.5*8=20元
};

export const COST_MODE_LABELS = {
  1: '总价模式',
  2: '单价模式',
  3: '续单价模式',
  4: '总价或单价模式',
};
