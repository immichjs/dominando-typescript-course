import { applyMixins } from "./applyMixins"

namespace ProductNamespace {
  class Product {
    buy(quantity: number) {
      return `Comprou ${quantity} unidades.`
    }

    sell(quantity: number) {
      return `Vendeu ${quantity} unidades.`
    }
  }

  class Movel {
    toSit() {
      return 'Sentou no móvel'
    }

    toPush(meters: number) {
      return `Empurrou ${meters}m`
    }
  }

  class Sofa {
    constructor(public name: string) {
    }
  }

  interface Sofa extends Product, Movel { }

  applyMixins(Sofa, [Movel, Product])

  const product = new Sofa('Meu sofá')
  console.log(product.buy(40))
  console.log(product.sell(40))
  console.log(product.toPush(40))
}
