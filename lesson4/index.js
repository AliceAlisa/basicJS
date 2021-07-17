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
const cart = {
    productList: [
        ['jeans', 50, 1],
        ['T-shirt', 15, 3],
        ['shorts', 20, 2],
        ['cap', 15, 2],
        ['sneakers', 80, 1]
    ],
    countBasketPrice(cart) {
        let summ = 0;
        for (let i = 0; i < cart.length; i++) {
            summ += cart[i][1] * cart[i][2];
        }
        return summ;
    }
}
console.log('Сумма корзины: ' + cart.countBasketPrice(cart.productList) + '\n');