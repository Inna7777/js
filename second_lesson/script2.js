"use strict";

// 1.	Задание 1:
// 2.	1. Создать две переменные и спросить у пользователя значения для данных
// 3.	переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 4.	2. Вывести на экран текст:
// 5.	“Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

const nameUser = prompt("Введите Ваше имя", "");
// + превратит ВСЕ введеные данные в число. в противном случае будет NaN, не работает с BigINT
// для проверки на NaN используем функцию Number.isNaN(значение); используется в ключе if
// parseInt превратит в число и отбросит дробную часть если она была
const ageUser = Number.parseInt(prompt("Введите Ваш возраст", ""));
isNum(ageUser)
  ? alert(
      `Добро пожаловать, ${nameUser}. Ваше количество оборотов вокруг солнца - ${ageUser} `
    )
  : alert("Вы не правильно ввели возраст");
