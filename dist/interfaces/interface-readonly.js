"use strict";
const course = {
    title: 'Dominando Typescript',
    price: 27.90,
    courseLoad: 40,
    classification: 5
};
course.title = 'Não pode alterar o titulo por ser readonly';
console.log(course);
