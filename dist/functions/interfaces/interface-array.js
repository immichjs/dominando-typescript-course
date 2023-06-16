"use strict";
const frontEnd = {
    id: 1,
    name: 'Front-end',
};
const backEnd = {
    id: 2,
    name: 'Back-end'
};
const menu = {
    categories: [frontEnd, backEnd]
};
console.log(menu);
let myTasks = ['Estudar Typescript', 'Estudar Nest.js', 'Estudar MongoDB', 20, true, frontEnd, backEnd];
console.log(myTasks[0]);
console.log(myTasks);
