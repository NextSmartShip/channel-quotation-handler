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
    name: '中通澳洲专线',
    template: 'zto_au',
  },
  {
    name: '中通新马专线',
    template: 'zto_sg_my',
  },
  {
    name: '中通AUPOST-ZX',
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
