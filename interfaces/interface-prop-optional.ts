interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  status: boolean
}

const smartphone: IProduct = {
  id: 1,
  name: 'Xiaomi Note 11s',
  price: 1999.90,
  status: true
}

console.log(smartphone)

smartphone.description = 'Descrição definida posteriormente'
console.log(smartphone)
