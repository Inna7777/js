"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь вс{егда вводит корректное число.
*/
//Первый вариант
 let C = prompt('Bведите температуру в градусах Цельсия','');
 let F = (9 / 5) * C + 32;
 alert(`1. Цельсий: ${C}, Фаренгейт: ${F}`);

//Второй вариант
let Cel = prompt("Bведите температуру в градусах Цельсия", "");
let numCel = Number(Cel);
let Far = (9 / 5) * numCel + 32;
isNaN(numCel)
  ? alert("Не правильно ввели число")
  : alert(`2. Цельсий: ${Cel}, Фаренгейт: ${Far}`);
  
//Третий вариант
  function faringate(c){
    const F = (9 / 5) * c + 32;
    return F;
  }
  
  const Celsiy = prompt('Введите градусы Цельсия', '');
  alert(`3.Цельсий: ${C}  Фарингейт: ${faringate(C)}`);