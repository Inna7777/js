"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = Number(
  prompt("Введите число месяца от 1 до 31-включительно")
);
let n = 1;
if (dayNumber >= 1 && dayNumber <= 10) {
  console.log(`Число ${dayNumber} попадает в ${n}-ю декаду месяца`);
} else if (dayNumber >= 11 && dayNumber <= 20) {
  console.log(`Число ${dayNumber} попадает в ${n + 1}-ю декаду месяца`);
} else if (dayNumber >= 21 && dayNumber <= 31) {
  console.log(`Число ${dayNumber} попадает в ${n + 2}-ю декаду месяца`);
} else {
  console.log(`Вы ввели неккоректные значения`);
}
