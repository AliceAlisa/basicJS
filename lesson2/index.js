'use strict';
/*Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, т.к. префиксная форма возвращает новое значение(увеличенное на 1), т.е. 1+1
d = b++; alert(d);           // 1, т.к. постфиксная форма возвращает старое значение(до увеличения на 1), т.е. 1
c = (2 + ++a); alert(c);      // 5, в четвертой строке a была увеличена на 1 ед(cтала 2),в данном выражении снова увеличина на 1(стала 3, т.к. префиксная форма), т.е. 2+3
d = (2 + b++); alert(d);      // 4, в пятой строке b была увеличена на 1 ед(cтала 2),в данном выражении постфиксная форма, поэтому возвращается 2(т.е. до увеличения), т.е. 2+2
alert(a);                    // 3, т.к. в шестой строке a была увеличена до 3
alert(b);                    // 3, т.к. в седьмой строке b была увеличена до 3 */


/*Задание 2
var a = 2;
var x = 1 + (a *= 2);
x будет равен 5, так как а *= 2 будет равно 4, т.е. 1+4  */


/*Задание 3*/
let a = parseInt(prompt('Задание номер 3. \nВведите любое значение a'));
let b = parseInt(prompt('Введите любое значение b'));
let c;

if (a >= 0 & b >= 0) {
    c = a - b;
    alert('Разность a и b составляет: ' + c);
} else if (a < 0 & b < 0) {
    c = a * b;
    alert('Произведение a и b составляет: ' + c);
} else {
    c = a + b;
    alert('Сумма a и b составляет: ' + c);
}

/*Задание 4*/
a = parseInt(prompt('Задание номер 4. \nВведите любое значение a в промежутке от 0 до 15'));
if (a < 0 || a > 15) {
    alert('Вы ввели неверное число. Попробуйте еще раз');
    a = parseInt(prompt('Введите любое значение a в промежутке от 0 до 15'));
}

switch (a) {
    case 0:
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
}

/*Задание 5*/
let result;

function add(number1, number2) {
    result = number1 + number2;
    return result;
}

function subtract(number1, number2) {
    result = number1 - number2;
    return result;
}

function multiply(number1, number2) {
    result = number1 * number2;
    return result;
}

function divide(number1, number2) {
    result = number1 / number2;
    return result;
}

/*Задание 6*/
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
        case '+':
            return add(arg1, arg2);
        case 'substract':
        case '-':
            return subtract(arg1, arg2);
        case 'multiply':
        case '*':
            return multiply(arg1, arg2);
        case 'divide':
        case '/':
            return divide(arg1, arg2);
        default:
            alert('Неизвестная операция');
    }
}
let arg1 = parseFloat(prompt('Задание номер 6. \nВведите любое значение для первого числа'));
let arg2 = parseFloat(prompt('Введите любое значение для второго числа'));
let oper = prompt('Укажите какую операцию с этими числами вы хотите совершить(+, -, *, /)');
alert('Результат операции: ' + mathOperation(arg1, arg2, oper));


/*Задание 7
null и 0 являются разными типами данных, а при сравнении разных типов JavaScript приводит каждое из них к числу.

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
alert( null === 0 ); //(4) false

(1),(3) - Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
(2) - Для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.
(4) - При строгом сравнении типы не преобразуются, поэтому при сравнении разных типов будет всегда возвращаться false. */


/*Задание 8*/
let powerResult = 1;

function power(val, pow) {
    if (pow >= 1) {
        powerResult *= val;
        --pow;
        power(val, pow);
    };
    return powerResult;

};

let val = parseInt(prompt('Задание номер 8. \nВведите возводимое в степень число: '));
let pow = parseInt(prompt('Введите степень, в которую вы хотите возвести число: '));
power(val, pow);
alert('Результат возведения в степень: ' + powerResult);

