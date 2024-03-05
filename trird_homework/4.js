"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/
/**Сумма двух чисел
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function summa(n1, n2) {
  return n1 + n2;
}

/**
 * Разность двух чисел
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function difference(n1, n2) {
  if (n1 >= n2) {
    return n1 - n2;
  }
  return n2 - n1;
}

/**
 * Произведение двух чисел
 * @param {number} n1
 * @param {number} n2
 * @returns
 */
function multiplication(n1, n2) {
  return n1 * n2;
}

/**
 * Частное двух чисел
 * @param {number} n1
 * @param {number} n2
 * @returns  {number|string}
 */
function division(n1, n2) {
  if (n2 === 0) {
    return "Делить на 0 нельзя";
  } else return n1 / n2;
}

console.log(summa(2, 8));
console.log(difrent(2, 8));
console.log(multy(2, 8));
console.log(del(2, 8));
