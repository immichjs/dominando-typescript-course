interface ICategory {
  id: number;
  name: string;
  parent?: ICategory;
}

const frontEnd: ICategory = {
  id: 1,
  name: 'Front-end',
}

const backEnd: ICategory = {
  id: 2,
  name: 'Back-end'
}

interface IMenu {
  categories: ICategory[];
}

const menu: IMenu = {
  categories: [frontEnd, backEnd]
}

console.log(menu)

interface ITask {
  [index: number]: string | number | boolean | ICategory;
}

let myTasks: ITask = ['Estudar Typescript', 'Estudar Nest.js', 'Estudar MongoDB', 20, true, frontEnd, backEnd]
console.log(myTasks[0])
console.log(myTasks)
