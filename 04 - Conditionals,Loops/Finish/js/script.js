console.clear();
//
// // ## 0 Проверка диапазона
// //
// // Напишите код который б проверял длинну телефонного номера
// // Длинна номера не должна быть не меньше 9 и не больше 11
//
// // * Your code Start *
// var numberPhone= prompt('Enter phone number:');
// verifyTheUsersPhoneNumber(numberPhone);
// function verifyTheUsersPhoneNumber(numberPhone) {
//     if (9<= numberPhone.length  && numberPhone.length <=11 && isNaN(numberPhone)===false){
//      alert ('You phone: ' + numberPhone);
//     }
//     else {
//         alert ('You entered an invalid number. Your phone should consist of numbers and be at least 9 and not more than 11.');
//         numberPhone= prompt('Enter phone number');
//         return verifyTheUsersPhoneNumber(numberPhone);
//     }
// }
// // * Your code End *
//
//
// // ## 1 Клонирование обьектов
// //
// // Склонируйте обьект objectA в objectB при помощи цикла
//
// var objectA = {
//   name: 'John',
//   lastname: 'Dou',
//   age: 50
// }
//
// var objectB = {};
//
// // Переопределяем значения обьекта objectA
// objectA.name = 'Chris';
// objectA.name = 'Couer';
// objectA.name = '45';
//
// // Если обьект objectB склонирован, значения в нем меняться не будут
// // Выводим значения склонированного обьекта для проверки
// console.log(objectB.name); // John
// console.log(objectB.lastname); // Dou
// console.log(objectB.age); // 50

// * Your code Start *
// var objectA = {
//   name: 'John',
//   lastname: 'Dou',
//   age: 50
// }
// var objectB = {};
// for(key in objectA){
//     objectB[key]=objectA[key];
//     objectB[key]=objectA[key];
//     objectB[key]=objectA[key];
// }
// objectA.name = 'Chris';
// objectA.name = 'Couer';
// objectA.name = '45';
//
// console.log(objectB.name); // John
// console.log(objectB.lastname); // Dou
// console.log(objectB.age); // 50
// // * Your code End *

// // ## 2 Ветвление
// // При помощи конструкци switch/case выведете текущую дату
// // Название месяца должно иметь вид строки
// // Например = 14 Июня 2017
//

//
// // * Your code Start *
// var date = new Date();
// var day = date.getDate(); // Текущий день
// var month = date.getMonth(); // Текущий месяц (от 0 до 11)
// var year = date.getFullYear(); // Текущий год
// var monthArray = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
// var monthName = ''; // Переменная для значения

// var i=0;
// while (i<= 11){
//
//     console.log('case month='+i+':    monthName=monthArrey['+i+'];    break;');
//     i++;
// }
// switch (month) {
//     case month=0:    monthName=monthArraay[0];    break;
//     case month=1:    monthName=monthArray[1];    break;
//     case month=2:    monthName=monthArray[2];    break;
//     case month=3:    monthName=monthArray[3];    break;
//     case month=4:    monthName=monthArray[4];    break;
//     case month=5:    monthName=monthArray[5];    break;
//     case month=6:    monthName=monthArray[6];    break;
//     case month=7:    monthName=monthArray[7];    break;
//     case month=8:    monthName=monthArray[8];    break;
//     case month=9:    monthName=monthArray[9];    break;
//     case month=10:   monthName=monthArray[10];    break;
//     case month=11:   monthName=monthArray[11];    break;
// }
// console.log(`Today is: ${day} ${monthName} ${year} года`) // Пример: 14 Июня 2017
// * Your code End *


//
//
// // ## 3 Взаимодействие с пользователем
// //
// // Запросите через prompt у пользователя его имя;
// // Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// // После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// // -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// // -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл
//
// var users = [{
//     name: 'Alex',
//     password: 123
// }, {
//     name: 'Chris',
//     password: 456
// }, {
//     name: 'Bill',
//     password: 789
// }];
//
// // * Your code Start *
// console.log(users.name);
// var nameUserVerification = prompt('Enter you name: ', 'Mishovur');
// var nameUserPasswordVerification ='';
//
// var use6rVerification = function () {
//         users.filter(function (item) {
//             {
//                 return item.name==nameUserPasswordVerification;
//             }
//
//         })
//     };
// console.log(use6rVerification());

// users.forEach(function(element) {
//     console.log(element);
//     console.log(element.name);
//     console.log(element.password);
// });
//userVerification(nameUser);

// // * Your code End *
//
//
// // ## 4
// // Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// // Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// // После прерывания цикла выводится сумма введеных чисел
//
// var sumArray = +prompt('Please enter number', 0);
// var sum = 4;
//
// function summma(sumArray) {
//     do {
//         sum = sumArray + sum;
//         sumArray = +prompt('Please enter number', 0);
//     }
//     while (isFinite(sumArray)) ;
//     alert('The sum of your number: '+ sum);
// }
//
// summma(sumArray);

// // * Your code End *
//
// // ## 5
// // Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt
//

//
// // * Your code Start *

// var summetNumber = +prompt('Please enter number', 0);
// function sumArithmeticProgression(summetNumber) {
//     sum=(1+summetNumber)*(summetNumber)/2;
//     alert(sum);
// }
// sumArithmeticProgression(summetNumber);
// // * Your code End *
//
//
// // ## 6
// // Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// // Размер шахматной доски стандартны 8х8
// // Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// // Ее можно не трогать
// // Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// // Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js
//

// // * Your code Start *
// var color = "";
// const size = 8;
// var drawFraction = function (color) {
//     const board = document.querySelector('.board');
//     const fraction = document.createElement('div');
//     fraction.style.background = color;
//     board.appendChild(fraction);
//
//
// }
//
//
// for (var i = 0; i < size; i += 1) {
//     for (var j = 0; j < size; j += 1) {
//         if ((i + j) % 2 == 0) {
//             drawFraction("white");
//             // console.log(color +'i:='+i +'j:='+j);
//         }
//         else {
//             drawFraction("black");
//             // console.log(color +'i:='+i +'j:='+j);
//         }
//     }
// }
// // * Your code End *
