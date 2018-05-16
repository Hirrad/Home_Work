// "use strict"
// console.clear();
//
// // ## 0 Работа с функциями
// //
// // Напишите функцию которая возвращала б сумму всех введенных аргументов
// // Если один из аргументов не число, вывод сообщения "Все аргументы должны быть числовыми"
//
// // * Your code Start *

// function argumentsSumm() {
//     var sum = 0;
//     outer:    for (var i = 0; i < arguments.length; i += 1) {
//         if (isNaN(arguments[i]) === true) {
//             sum = alert('All arguments must be number!');
//
//             break outer;
//         }
//         sum += arguments[i];
//     }
//     return sum;
// }
//
//
// * Your code End *
// //
// console.log(argumentsSumm(10, 20, 50, 4, 17))   // 101
// console.log(argumentsSumm(0, 1, 1, -1, 1))      // 2
// console.log(argumentsSumm(4, 'lol', 0))         // Все аргументы должны быть числовыми
// console.log(argumentsSumm(NaN, 4, 6, 4, 0))     // Все аргументы должны быть числовыми
//
// // =============================================================================
// // =============================================================================
// // =============================================================================
//
// // ## Замыкания
// //
// // Посмотрите на код внизу
// // Обьясните почему он работает именно так
// // Перепишите код так, что б он работал корректно. Если значете несколько вариантов, напишите их
//
//
// // * Your code Start *

//не получается так как, переменая i не попадает вначале в область видимости в нашей функции для push, только когда
// прошел весь цыкл i=5 и наша функция его берет постоянно, потому и выводится 5
///////////////////////////////////
// var funcArrays = function () {
//     var arr = [];
//     for (var i = 0; i < 5; i++) {
//         console.log('проходим for в внешней функции ' +i);
//         console.log(+i);
//         var number=(function (i) {
//             console.log( 'мы внутри'+i);
//             return i;
//         })(i);
//         console.log('значение i после внутреней функции '+number);
//         arr.push(number);
//     }
//     return arr;
//
// }
/////////////////////////////////
// var funcArrays = function () {
//     var arr = [];
//
//     for (let i = 0; i < 5; i++) {
//         arr.push(function() {
//             return i
//         });
//     }
//
//     return arr;
// }


// * Your code End *

// var func = funcArrays();
//
// console.log(func[1]()); // Выводит 5, а должно вывести 1
// console.log(func[3]()); // Выводит 5, а должно вывести 3

//
//
// // =============================================================================
// // =============================================================================
// // =============================================================================
//
//
//
// // ## Callback функции
// //
// // Создайте функцию которая принимает 2 числовых значения
// // Третьим аргументом функции должна быть функция, которая будет манипулировать этими агументами
//
// // * Your code Start *
//
//
//
// // * Your code End *
//
// var add=['addition','multiplication','derogation']
// function suma(a,b,act) {
//     switch (act) {
//         case 'addition':
//             return arguments[0] + arguments[1];
//         case 'multiplication':
//             return arguments[0] - arguments[1];
//         case 'derogation':
//             return arguments[0] * arguments[1];
//         // var addition = (function () {
//         //         return arguments[0] + arguments[1];
//         //
//         //     })(a, b);
//         //     console.log(act);
//         //     return addition;
//     }
//
// }
// console.log(suma(15,20,add[2]));
// console.log(callback(20, 10, function(a, b){
//   return a + b
// })) // Выведет 30

// console.log(callback(20, 10, function(a, b){
//   return a - b
// })) // Выведет 10
//
// console.log(callback(20, 10, function(a, b){
//   return a * b
// })) // Выведет 200
//
//
//
// // =============================================================================
// // =============================================================================
// // =============================================================================
//
//
// // ## Работа с массивами
// //
// // Создать функцию которая будет обьеденять массив со строкой по разделителю
// // Функция должна принимать 3 аргумента (Массив, строку, разделитель)
// // Возвращает функция массив обьедененный со строкой по разделителю.
// // Массив должен быть отсортирован в алфавитном порядке
//
// const arrayData = ['Alaska', 'Alabama', 'Virginia'];
//
// const stringDataOne = 'Washington, Indiana, Louisiana';
// const stringDataTwo = 'Massachusetts Nebraska';
//
// // * Your code Start *

// function concatArrayWithString(arrayData,stringData,delimiter){
// var splitStringData=stringData.split(delimiter);
//    var newarrayData = arrayData.concat(splitStringData);
//     console.log(newarrayData.sort());
//
// }
// concatArrayWithString(arrayData,stringDataOne,', ')
// // * Your code End *
//
// console.log(concatArrayWithString(arrayData, stringDataOne, ', ')); // Выводит массив: ["Alabama", "Alaska", "Indiana", "Louisiana", "Virginia", "Washington"]
// console.log(concatArrayWithString(arrayData, stringDataTwo, ' ')); // Выводит массив: ["Alabama", "Alaska", "Massachusetts", "Nebraska", "Virginia"]
//
//
// // =============================================================================
// // =============================================================================
// // =============================================================================
//
//
// // ## Методы перебора массива
// //
// // Задача создать 4 функции которые создают новый массив ()
// // Во всех случаях за основу берется массив itDepartment
// // Помните что работаете с обектами. Соотвецтвенно для сравнения вам нужно работать с ключами обьекта
//
// var itDepartment = [
//     {first: 'Philip', last: 'Bradley', born: 1979, possition: 'Back-end'},
//     {first: 'Phil', last: 'Harmon', born: 1983, possition: 'Front-end'},
//     {first: 'Marty', last: 'Ormond', born: 1991, possition: 'Front-end'},
//     {first: 'Silvester', last: 'Rod', born: 1987, possition: 'QA'},
//     {first: 'Johannes', last: 'Planck', born: 1971, possition: 'Front-end'},
//     {first: 'Reynard', last: 'Christopher', born: 1973, possition: 'QA'},
//     {first: 'Max', last: 'Forrest', born: 1988, possition: 'Manager'},
// ];
//
// const fullNames = itDepartment.map(function (item) {
//     // console.trace();
//     return `${item.first} ${item.last}`;
// })
// // console.dir(fullNames);
//
// const filtered = itDepartment.filter(function (item) {
//     return item.possition == 'Front-end' || item.possition == 'Back-end'
// });
//
// function filterDeveloper() {
//     filtered.forEach(function (item, i) {
//         console.log(`${i}.${item.first} ${item.last} -  ${item.possition}`);
//     })
// }
//
// // filterDeveloper();
// // console.dir(filtered);
//
// const sorted = itDepartment.sort((a, b) => a.born - b.born);
//
//
// function filterBorn() {
//     sorted.forEach(function (item) {
//         console.log(`${item.first} ${item.last} ${item.born} год рождения  Должность:  ${item.possition}`);
//     })
// }
//
// // filterBorn();
// let j=0;
// const job = ['Back-end', 'Front-end', 'QA', 'Manager'];
// const counter = itDepartment.reduce(function (i=[], nextDeveloper, index, array) {
//     if(nextDeveloper.possition==job[0]){
//
//         i[0]=++j;
//     }
//     if(nextDeveloper.possition==job[1]){
//
//         i[1]=++j;
//     }
//     if(nextDeveloper.possition==job[2]){
//
//         i[2]=++j;
//     }
//     if(nextDeveloper.possition==job[3]){
//
//         i[3]=++j;
//     }
//
//     return i;
// },[])
// let z=0;
// const counter = itDepartment.reduce(function (i = [], nextDeveloper, index, array) {
//     if(nextDeveloper.possition==job[1]){
//         i[0]=1;
//     }
// }, [])
// console.log(counter);
// console.log(sorted);
// var string=[];
// itDepartment.forEach(function (item,i) {
//     // console.log(`${item.first} ${item.last}`);
//     string.push(`${item.first} ${item.last}` );
// // console.log(string);
// return string;
// })
// console.log(string);
// itDepartment.forEach(function (item, i) {
//     console.log(i+'first ='item.first);
// // var string=[];
// string.slice(0,0,item.first+' '+ item.last );
// console.log(string);

// })
// // * Your code Start *


//

//

//
// // * Your code End *
// //
// // map(); Создайте массив в котором будут имена и фамилии всех работников It департамента. (В формате Philip Bradley)
// console.dir(fullNames);
//
// // filter(); Отфильтруйте всех разработчиков (Developer) И выведете их имена и должности
// console.dir(filtered);
//
// // sort(); Отсортируйте массив по возрасту работников. По убыванию. (Подсказака: Можете использовать конструктор new Data(). Но можно и просто по дате)
// console.dir(sorted);
//
// // reduce(); Узнайте сколько всего разработчико разных должностей. Например:
// // Front-end: 2,
// // Back-end: 1,
// // QA: 2
// // Manager: 1
//
// console.log(counter);
