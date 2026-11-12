import test from 'node:test';
import assert from 'node:assert/strict';
import {bouquets, filterBouquets, makeRequest} from './catalog.ts';
test('all catalog entries are unique and filters preserve both occasion and budget',()=>{
 assert.equal(new Set(bouquets.map(b=>b.id)).size,8);
 assert.equal(filterBouquets('Все букеты','any').length,8);
 for(const occasion of ['Люблю','Спасибо','С днём рождения','Просто порадовать']){
  for(const budget of ['3000','5000','more']){
   for(const b of filterBouquets(occasion,budget)){
    assert.ok(b.occasions.includes(occasion as never));
    assert.ok(budget==='3000'?b.price<=3000:budget==='5000'?b.price>3000&&b.price<=5000:b.price>5000);
   }
  }
 }
 assert.equal(filterBouquets('Люблю','3000').length,0);
});
test('product request identifies illustrative price and asks for actual conditions',()=>{
 const text=makeRequest({bouquet:bouquets[0]});
 assert.ok(text.includes('Всё о нежности'));
 assert.ok(text.includes('демонстрационного каталога'));
 assert.ok(text.includes('актуальные варианты'));
 assert.ok(!text.includes('undefined'));
});
test('picker request preserves occasion, budget and date without missing values',()=>{
 const text=makeRequest({occasion:'Спасибо',budget:'3 000–5 000 ₽',date:'2026-12-25'});
 assert.ok(text.includes('Повод: Спасибо.'));
 assert.ok(text.includes('Бюджет: 3 000–5 000 ₽.'));
 assert.ok(text.includes('25.12.2026'));
 const empty=makeRequest({});
 assert.ok(!empty.includes('Желаемая дата'));
 assert.ok(!empty.includes('undefined'));
});
