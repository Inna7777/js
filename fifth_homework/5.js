"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const object = {};

for (let i = 0; i < en.length; i++) {
  object[en[i]] = ru[i];
}

console.log(object);

// второй вариант
en.forEach((item) => {
  object[en[item]] = ru[item];
});
console.log(object);
