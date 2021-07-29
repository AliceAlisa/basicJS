'use strict';
/*Задание 1 */

const cart = {

    cartList: [],

    containerCart: document.getElementById('cart'),

    cartText: null,
    cartContainerElem: null,
    cartTitle: null,
    cartProductPrice: null,
    cartProductQuanity: null,
    cartBtn: null,

    rendorCart() {
        this.cartText = document.createElement('p');
        this.containerCart.appendChild(this.cartText);
        this.cartText.textContent = 'Корзина пуста!';

        this.cartBtn = document.createElement('button');
        this.containerCart.appendChild(this.cartBtn);
        this.cartBtn.textContent = 'CLEAR CART';
        this.cartBtn.classList.add('hiddenBtn');

        this.cartBtn.addEventListener('click', () => {
            this.clearCart();
        });
    },

    checkCartAddToCart(obj) {
        this.cartBtn.classList.remove('hiddenBtn');
        let oldProductIndex = this.cartList.findIndex(item => item.id == obj.id);

        if (oldProductIndex == -1) {
            this.cartList.push(obj);
            this.cartAddToCart(obj);
        } else {
            this.cartList[oldProductIndex].quantity += 1;
            this.cartProductQuanity.textContent = ('Количество: ' + this.cartList[oldProductIndex].quantity);
        }
        this.checkCart();
    },

    cartAddToCart(obj) {
        let indexArr = this.cartList.findIndex(item => item.id == obj.id);

        this.cartContainerElem = document.createElement('div');
        this.cartTitle = document.createElement('h4');
        this.cartProductPrice = document.createElement('p');
        this.cartProductQuanity = document.createElement('p');

        this.containerCart.appendChild(this.cartContainerElem);
        this.cartContainerElem.appendChild(this.cartTitle);
        this.cartContainerElem.appendChild(this.cartProductPrice);
        this.cartContainerElem.appendChild(this.cartProductQuanity);

        this.cartProductPrice.textContent = this.cartList[indexArr].price + ' $';
        this.cartProductQuanity.textContent = ('Количество: ' + 1);
        this.cartTitle.textContent = this.cartList[indexArr].name;
    },
    countBasketPrice() {
        let summ = 0;
        for (let i = 0; i < this.cartList.length; i++) {
            summ += this.cartList[i].price * this.cartList[i].quantity;
        }
        return summ;
    },
    countBasketQuantity() {
        let quan = 0;
        for (let i = 0; i < this.cartList.length; i++) {
            quan += this.cartList[i].quantity;
        }
        return quan;
    },
    checkCart() {

        if (this.cartList.length == 0) {
            this.cartText.textContent = 'Корзина пуста!';
            return this.cartText.textContent;
        } else {
            this.cartText.textContent = 'В корзине ' + this.countBasketQuantity() + ' товаров ' + 'на сумму ' + this.countBasketPrice() + ' $';
            return this.cartText.textContent;
        }
    },

    clearCart() {
        for (let i = 0; i < this.cartList.length; i++) {
            this.containerCart.querySelector('div').remove();
            this.cartList[i].quantity = 1;
        };
        this.cartList = [];
        this.checkCart();
        this.cartBtn.classList.add('hiddenBtn');
    }
}

let product = {
    cart,

    productList: [
        {
            id: 33444,
            name: 'Jeans',
            price: 50,
            quantity: 1
        },
        {
            id: 56737,
            name: 'T-shirt',
            price: 15,
            quantity: 1
        },
        {
            id: 80904,
            name: 'Shorts',
            price: 20,
            quantity: 1
        },
        {
            id: 76833,
            name: 'Cap',
            price: 15,
            quantity: 1
        },
        {
            id: 54521,
            name: 'Sneakers',
            price: 80,
            quantity: 1
        }
    ],

    containerCatalog: document.getElementById('catalog'),

    displayProduct() {
        let catalogTitel = document.createElement('h2');
        this.containerCatalog.appendChild(catalogTitel);
        catalogTitel.textContent = ' Каталог ';

        for (let i = 0; i < this.productList.length; i++) {

            let productContainer = document.createElement('div');
            let productTitle = document.createElement('h4');
            let productText = document.createElement('p');
            let productBtn = document.createElement('button');

            this.containerCatalog.appendChild(productContainer);
            productContainer.appendChild(productTitle);
            productContainer.appendChild(productText);
            productContainer.appendChild(productBtn);

            productText.textContent = this.productList[i].price + ' $';
            productTitle.textContent = this.productList[i].name;
            productBtn.textContent = 'ADD TO CART';

            productBtn.id = this.productList[i].id;
        };
        this.initAddToCart();
        this.cart.rendorCart();
    },

    initAddToCart() {

        this.containerCatalog.addEventListener('click', () => {
            this.clickAddToCart(event);
        });
    },

    clickAddToCart(event) {
        if (event.target.tagName !== 'BUTTON') return;
        this.findAddToCart(event.target.id);
    },

    findAddToCart(idTarget) {
        let addElemNum = this.productList.findIndex(elem => elem.id == idTarget);
        this.addToCart(addElemNum);
    },

    addToCart(addElemNum) {
        let addToCartElem = this.productList[addElemNum];
        this.cart.checkCartAddToCart(addToCartElem);
    },
}
product.displayProduct();



