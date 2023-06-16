const categories: string[] = ['Comédia', 'Drama', 'Romance', 'Ação']

console.log(categories)

const yearFilms: Array<Number> = []

for (let year = 2000; year <= new Date().getFullYear(); year++) {
  yearFilms.push(year)
}

console.log(yearFilms)
