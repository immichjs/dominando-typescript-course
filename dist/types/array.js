"use strict";
const categories = ['Comédia', 'Drama', 'Romance', 'Ação'];
console.log(categories);
const yearFilms = [];
for (let year = 2000; year <= new Date().getFullYear(); year++) {
    yearFilms.push(year);
}
console.log(yearFilms);
