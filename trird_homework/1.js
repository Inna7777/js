"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

/**
 * Функция возвращает куб числа
 * @param {number} number
 * @returns {number}
 */
function getCubeNamber(number) {
  return number ** 3;
}

console.log(getCubeNamber(3));
