export const occasions = ['Все букеты', 'Люблю', 'Спасибо', 'С днём рождения', 'Просто порадовать'] as const;
export type Occasion = typeof occasions[number];
export type Bouquet = { id: number; name: string; note: string; price: number; image: string; occasions: Occasion[]; tag?: string };
export const bouquets: Bouquet[] = [
 {id:1,name:'Всё о нежности',note:'Пастельные розы, сезонные цветы и эвкалипт',price:4900,image:'hero',occasions:['Люблю','С днём рождения'],tag:'Сказать «люблю»'},
 {id:2,name:'Маленькое счастье',note:'Розовые тюльпаны и немного весны',price:2900,image:'white',occasions:['Просто порадовать','Спасибо'],tag:'Просто так'},
 {id:3,name:'Ты — моё солнце',note:'Яркие подсолнухи в лаконичной упаковке',price:3900,image:'pastel',occasions:['Спасибо','С днём рождения'],tag:'Добавить радости'},
 {id:4,name:'Особенный момент',note:'Розы в пудровых оттенках',price:5900,image:'roses',occasions:['Люблю','С днём рождения']},
 {id:5,name:'С весной внутри',note:'Сезонные тюльпаны в розовой гамме',price:3500,image:'tulips',occasions:['Спасибо','Просто порадовать']},
 {id:6,name:'Тёплый привет',note:'Лёгкая композиция с жёлтыми цветами',price:2700,image:'bright',occasions:['Спасибо','Просто порадовать']},
 {id:7,name:'Большое спасибо',note:'Пёстрые тюльпаны для важных слов',price:4500,image:'field',occasions:['Спасибо','С днём рождения']},
 {id:8,name:'Для тебя',note:'Воздушная композиция с розовыми цветами',price:6500,image:'pink',occasions:['Люблю','С днём рождения']}
];
export const money = (n: number) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
export function filterBouquets(occasion: string, budget: string) {
 return bouquets.filter(b => (occasion === 'Все букеты' || b.occasions.includes(occasion as Occasion)) && (budget === 'any' || (budget === '3000' ? b.price <= 3000 : budget === '5000' ? b.price > 3000 && b.price <= 5000 : b.price > 5000)));
}
export function makeRequest(data:{bouquet?:Bouquet;occasion?:string;budget?:string;date?:string}) {
 return ['Здравствуйте, Мистер Фло!', data.bouquet ? `Понравился букет «${data.bouquet.name}» из демонстрационного каталога (примерная цена ${money(data.bouquet.price)}).` : 'Помогите, пожалуйста, подобрать букет.', data.occasion && data.occasion !== 'Все букеты' ? `Повод: ${data.occasion}.` : '', data.budget && data.budget !== 'any' ? `Бюджет: ${data.budget}.` : '',data.date ? `Желаемая дата: ${data.date.split('-').reverse().join('.')}.` : '', 'Подскажите актуальные варианты, стоимость и условия получения.'].filter(Boolean).join('\n');
}
