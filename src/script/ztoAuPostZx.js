import { COST_MODE } from '../config/const';

export function checkZtoAuPostZxTemplateIsValid(json) {
  if (!json || json.length < 1 || Object.keys(json[0]).length === 0) return false;
  const headers = [];
  const rowLen = Object.keys(json[0]).length;
  for (let idx = 0; idx < rowLen / 4; idx += 1) {
    if (idx === 0) {
      headers.push('重量kg');
      headers.push('au1区');
      headers.push('au2区');
      headers.push('au3区');
    } else {
      headers.push(`重量kg_${idx}`);
      headers.push(`au1区_${idx}`);
      headers.push(`au2区_${idx}`);
      headers.push(`au3区_${idx}`);
    }
  }
  return headers && headers.every((val) => Object.keys(json[0]).includes(val));
}

export function handleZtoAuPostZxExcelJson(json) {
  if (!json || json.length < 1) {
    return [];
  }

  const rowsData = [];
  json.forEach((r) => {
    const rowLen = Object.keys(r).length;
    for (let idx = 0; idx < rowLen / 4; idx += 1) {
      let weight = 0;
      let cost1 = 0;
      let cost2 = 0;
      let cost3 = 0;
      if (idx === 0) {
        weight = r['重量kg'];
        cost1 = r['au1区'];
        cost2 = r['au2区'];
        cost3 = r['au3区'];
      } else {
        weight = r[`重量kg_${idx}`];
        cost1 = r[`au1区_${idx}`];
        cost2 = r[`au2区_${idx}`];
        cost3 = r[`au3区_${idx}`];
      }
      rowsData.push({
        weight,
        cost1,
        cost2,
        cost3
      });
    }
  });

  const sortByKey = (key, arr, callback) => arr.sort(({ [key]: a }, { [key]: b }) => callback(a, b));
  sortByKey('weight', rowsData, (a, b) => a - b);

  const items = [];
  let preWeight = 0;
  if (rowsData && rowsData.length > 0) {
    rowsData.forEach((item) => {
      items.push({
        mode: COST_MODE.TotalPrice,
        country_code: 'AU',
        country_name: '澳大利亚',
        start_weight: parseFloat(preWeight, 10) * 1000,
        end_weight: parseFloat(item.weight, 10) * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 0,
        unit_weight_fee: item.cost1,
        zone: 1
      });
      items.push({
        mode: COST_MODE.TotalPrice,
        country_code: 'AU',
        country_name: '澳大利亚',
        start_weight: parseFloat(preWeight, 10) * 1000,
        end_weight: parseFloat(item.weight, 10) * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 0,
        unit_weight_fee: item.cost2,
        zone: 2
      });
      items.push({
        mode: COST_MODE.TotalPrice,
        country_code: 'AU',
        country_name: '澳大利亚',
        start_weight: parseFloat(preWeight, 10) * 1000,
        end_weight: parseFloat(item.weight, 10) * 1000,
        first_weight: 0,
        first_weight_fee: 0,
        unit_weight: 0,
        unit_weight_fee: item.cost3,
        zone: 3
      });
      preWeight = item.weight;
    });
  }
  return items;
}
