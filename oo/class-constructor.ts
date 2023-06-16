class Order {
  constructor(private product: string, protected totalValue: number, public deliveryForecast: Date) { }
}

const myOrder = new Order('TV 50"', 3000, new Date())
console.log(myOrder)
