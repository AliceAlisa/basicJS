'use strict';
/*Задание 1 */
const chessBoard = {
    rows: [0, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    cols: [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0],

    containerElement: document.getElementById('chess'),
    blackColor: '#1C1C1C',

    initChessCells() {

        for (let row = 0; row < this.rows.length; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.cols.length; col++) {
                const td = document.createElement('td');
                trElem.appendChild(td);

                if (this.rows[row] === 0 && this.cols[col] !== 0) {
                    td.innerHTML = this.cols[col];
                } else if (this.rows[row] !== 0 && this.cols[col] === 0) {
                    td.innerHTML = this.rows[row];
                }

                if (this.cellIsBlack(row, col)) {
                    td.style.backgroundColor = this.blackColor;
                }
            }
        }
    },
    cellIsBlack(row, col) {
        if (row === 0 || col === 0 || row === 9 || col === 9) {
            return false;
        }
        return (row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1);
    },
};
chessBoard.initChessCells();

/*Задание 2*/
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

    containerCart: document.getElementById('cart'),

    countBasketPrice() {
        let summ = 0;
        for (let i = 0; i < this.productList.length; i++) {
            summ += this.productList[i].price * this.productList[i].quantity;
        }
        return summ;
    },

    checkCart() {
        if (this.productList.length == 0) {
            this.containerCart.textContent = 'Корзина пуста!';
            return this.containerCart.textContent;
        } else {
            this.containerCart.textContent = 'В корзине ' + this.productList.length + ' товаров ' + 'на сумму ' + this.countBasketPrice() + ' рублей';
            return this.containerCart.textContent;
        }
    }
}
cart.checkCart();

/*Задание 3 */
let j33444 = {
    name: 'jeans',
    price: 50,
};
let t56737 = {
    name: 'T-shirt',
    price: 15,
};
let s80904 = {
    name: 'shorts',
    price: 20,
};
let c76833 = {
    name: 'cap',
    price: 15,
};
let s54521 = {
    name: 'sneakers',
    price: 80,
};

let product = {

    productList: [
        j33444,
        t56737,
        s80904,
        c76833,
        s54521
    ],

    containerCatalog: document.getElementById('catalog'),
    productArr: [],
    totalHTML: '',

    generateProductArr() {
        for (let i = 0; i < this.productList.length; i++) {
            this.productArr.push(this.productList[i].name);
            this.productArr.push(this.productList[i].price);
        }
        return this.productArr;
    },

    displayProduct() {
        this.containerCatalog.innerHTML = '<p> Каталог </p>';
        this.generateProductArr();
        for (let i = 0; i < this.productArr.length; i++) {
            this.totalHTML += this.productArr[i] + ' ';
            if (i % 2 == 1) {
                this.totalHTML += ' rub <br>'
            } else {
                this.totalHTML += ': '
            }
        };
        this.containerCatalog.innerHTML += this.totalHTML;
    }
}

product.displayProduct();
