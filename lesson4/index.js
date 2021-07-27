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
let jeans = {};
let tshirt = {};
let shorts = {};
let cap = {};
let sneakers = {};

const cart = {
    productList: [
        jeans = {
            price: 50,
            quantity: 1
        },
        tshirt = {
            price: 15,
            quantity: 3
        },
        shorts = {
            price: 20,
            quantity: 2
        },
        cap = {
            price: 15,
            quantity: 2
        },
        sneakers = {
            price: 80,
            quantity: 1
        }
    ],

    countBasketPrice(cart) {
        let summ = 0;
        for (let i = 0; i < this.productList.length; i++) {
            summ += this.productList[i].price * this.productList[i].quantity;
        }
        return summ;
    }

}
console.log('Сумма корзины: ' + cart.countBasketPrice(cart.productList));

/*Задание 3
let productName1 = {
    id: 9839858340,
    info: 'lorem',
    price: 50,
    quantity: 1
}
let productName2 = {
    id: 989675678,
    info: 'lorem',
    price: 30,
    quantity: 1
}
let productNameN = {
    id: 8800890043,
    info: 'lorem',
    price: 10,
    quantity: 1
}


let catalog = {
    productName1,
    productName2,
    productNameN
}

*/
