/* Задание 3. 
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH" */


let str = prompt('Введите текст, который нужно перевернуть');

let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
