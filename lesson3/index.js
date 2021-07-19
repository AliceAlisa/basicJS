'use strict';
/*Задание 1*/
let a = 2;

while (a < 100) {
    if (a % 2 == 0 & a != 2) {
        ++a;
    } else if (a % 3 == 0 & a != 3) {
        ++a;
    } else if (a % 5 == 0 & a != 5) {
        ++a;
    } else if (a % 7 == 0 & a != 7) {
        ++a;
    } else {
        console.log(a);
        ++a;
    }
}


/*Задание 2*/

let cart = [
    ['jeans', 50, 1],
    ['T-shirt', 15, 3],
    ['shorts', 20, 2],
    ['cap', 15, 2],
    ['sneakers', 80, 1]
];

let summ = 0;
function countBasketPrice(cart) {
    for (let i = 0; i < cart.length; i++) {
        summ += cart[i][1] * cart[i][2];
    }
    return summ;
}

alert('Стоимость корзины составляет: ' + countBasketPrice(cart));


/*Задание 3*/

for (let i = 0; i < 10; console.log(i++)) { }



/*Задание 4*/

let pyramid = 'x';
let i = 0;
do {
    console.log(pyramid);
    pyramid = pyramid + 'x';
    i++;
} while (i < 20);
