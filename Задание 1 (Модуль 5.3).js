/* Задание 1. 
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
С помощью унарного плюса необходимо преобразовать его  в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является. 
Добавьте отдельную проверку для этого значения. */


let result =+ prompt ('Введите значение');

if(isNaN(result) || typeof result !== "number") {
    console.log('Упс,кажется вы ошиблись');
}
else {
    if (result %2 === 0) {
        console.log ('Введено четное число');
    } else {
        console.log ('Введено нечетное число');
    }
}
