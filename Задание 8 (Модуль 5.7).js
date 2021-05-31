/*Задание 8.

Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let materialСolor = new Map([
  ['Brick', 'Orange'],
  ['Сoncrete', 'Grey'],
  ['Drywall', 'White']
]);

for (let [key, value] of materialСolor) {
  console.log(`Ключ — ${key}, значение — ${value}`)
}