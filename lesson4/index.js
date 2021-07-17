'use strict';
/*Задание 1 */

function makeObj(number) {
    if (number > 999) {
        console.log('Too big number');
        return {};
    } else if (number < 0) {
        console.log('Too small number');
        return {};
    } else {
        return {
            'units': number % 10,
            'tens': parseInt(number / 10) % 10,
            'hundreds': parseInt(number / 100)
        };
    }
}

console.log(makeObj(481));
/*const firstObj = makeObj(481);
console.log(firstObj);  Не совсем поняла, обязательно ли было присваивать объекту константу/переменную, или просто вывести в консоль результат работы функции? */

/*Задание 2 */

