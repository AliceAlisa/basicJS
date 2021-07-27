'use strict';
/*Задание 1 */

/*Задание 3 */
let j33444 = {
    name: 'Jeans',
    price: 50,
    quantity: 1
};
let t56737 = {
    name: 'T-shirt',
    price: 15,
    quantity: 3
};
let s80904 = {
    name: 'Shorts',
    price: 20,
    quantity: 2
};
let c76833 = {
    name: 'Cap',
    price: 15,
    quantity: 2
};
let s54521 = {
    name: 'Sneakers',
    price: 80,
    quantity: 1
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
    productNameArr: [],
    productPriceArr: [],

    generateProductArrs() {
        for (let i = 0; i < this.productList.length; i++) {
            this.productNameArr.push(this.productList[i].name);
            this.productPriceArr.push(this.productList[i].price);
        }
        return this.productNameArr, this.productPriceArr;
    },

    displayProduct() {
        let catalogTitel = document.createElement('h2');
        this.containerCatalog.appendChild(catalogTitel);
        catalogTitel.textContent = ' Каталог ';

        this.generateProductArrs();

        for (let i = 0; i < this.productNameArr.length; i++) {

            let productContainer = document.createElement('div');
            let productTitle = document.createElement('h4');
            let productText = document.createElement('p');
            let productBtn = document.createElement('button');

            this.containerCatalog.appendChild(productContainer);
            productContainer.appendChild(productTitle);
            productContainer.appendChild(productText);
            productContainer.appendChild(productBtn);

            productText.textContent = this.productPriceArr[i] + ' rub';
            productTitle.textContent = this.productNameArr[i];
            productBtn.textContent = 'ADD TO CART';
        };
    },

    initAddToCart() {
        this.displayProduct();
        let bth = document.getElementsByTagName('button');

        console.log(bth);
    }
}
product.initAddToCart();


/*Задание 2*/
/*let jeans = {
    price: 50,
    quantity: 1
};
let tshirt = {};
let shorts = {};
let cap = {};
let sneakers = {};*/

const cart = {
    productList: [
        /* jeans = {
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
         }*/
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
        let cartText = document.createElement('p');
        this.containerCart.appendChild(cartText);
        if (this.productList.length == 0) {
            cartText.textContent = 'Корзина пуста!';
            return cartText.textContent;
        } else {
            cartText.textContent = 'В корзине ' + this.productList.length + ' товаров ' + 'на сумму ' + this.countBasketPrice() + ' рублей';
            return cartText.textContent;
        }
    }
}
cart.checkCart();