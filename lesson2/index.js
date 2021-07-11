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
let a = parseInt(prompt('Введите любое значение a'));
let b = parseInt(prompt('Введите любое значение b'));
let c;

if (a >= 0 & b >= 0 & a > b) {
    c = a - b;
    alert('Разность a и b составляет: ' + c);
} else if (a >= 0 & b >= 0 & a < b) {
    c = b - a;
    alert('Разность a и b составляет: ' + c);
} else if (a < 0 & b < 0) {
    c = a * b;
    alert('Произведение a и b составляет: ' + c);
} else if (a >= 0 & b < 0 || a < 0 & b >= 0) {
    c = a + b;
    alert('Сумма a и b составляет: ' + c);
}

/*Задание 4*/

/*Задание 5*/
let result;

function add(number1, number2) {
    retult = number1 + number2;
    return result;
}

function subtract(number1, number2) {
    retult = number1 - number2;
    return result;
}

function multiply(number1, number2) {
    retult = number1 * number2;
    return result;
}

function divide(number1, number2) {
    retult = number1 / number2;
    return result;
}