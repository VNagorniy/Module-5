/*Задание 6.

Дан массив. 
Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.*/

let arr = [2, 2, 2, 1];
let result = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[0] === arr[i]) {
    result = true
  } else {
    result = false
    break
  }
};

console.log(result);