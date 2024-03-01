// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function printHello(username, lastname, age) {
//   console.log(`Привет, ${username} ${lastname}. Вы уже большой, вам ${age}`);
// }

// printHello("Inna", "Peshkova", 37);

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// function getSquere(number) {
//   return number ** 2;
// }
// const result = getSquere(+prompt("Введите число"));
// console.log(result);
// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function digit(num) {
//   if (!Number.isFinite(num)) {
//     return;
//   }
//   if (num < 0) {
//     console.log("---");
//   } else if (num > 0) {
//     console.log("+++");
//   }
// }

// digit(-9);
// digit(9);
// digit("f");

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// function sum(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
// }

// const num1 = Math.floor(Math.random() * 100);
// console.log(num1);
// const num2 = Math.floor(Math.random() * 100);
// console.log(num2);
// const num3 = Math.floor(Math.random() * 100);
// console.log(num3);
// sum(num1, num2, num3);

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// function gerSqrt(n) {
//   return Math.sqrt(n);
// }

// const sum = gerSqrt(3) + gerSqrt(4);
// console.log(sum);
// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// function findMin(n1, n2) {
//   //   return n1 > n2 ? n2 : n1;
//   return Math.min(n1, n2);
// }

// console.log(findMin(3, -4));

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// function getWeekday(num) {
//   switch (num) {
//     case 1:
//       return "понедельник";
//       break;

//     case 2:
//       return "вторник";
//       break;

//     case 3:
//       return "среда";
//       break;

//     default:
//       return "Некорректный день недели";
//   }
// }
// console.log(getWeekday(3));
// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// function sayHello(firstName) {
//   let time = new Date();
//   let hour = time.getHours();
//   console.log(hour);
//   if (hour > 21 || hour < 6) {
//     return `Доброй ночи, ${firstName}`;
//   } else if (hour >= 6 && hour < 12) {
//     return `Доброе утро, ${firstName}`;
//   } else if (hour >= 12 && hour < 16) {
//     return `Добрый день, ${firstName}`;
//   } else if (hour >= 15 && hour <= 21) {
//     return `Добрый вечер, ${firstName}`;
//   }
// }

// alert(sayHello("Inna"));
