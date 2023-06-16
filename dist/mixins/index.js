"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = require("./applyMixins");
var ProductNamespace;
(function (ProductNamespace) {
    class Product {
        buy(quantity) {
            return `Comprou ${quantity} unidades.`;
        }
        sell(quantity) {
            return `Vendeu ${quantity} unidades.`;
        }
    }
    class Movel {
        toSit() {
            return 'Sentou no móvel';
        }
        toPush(meters) {
            return `Empurrou ${meters}m`;
        }
    }
    class Sofa {
        constructor(name) {
            this.name = name;
        }
    }
    (0, applyMixins_1.applyMixins)(Sofa, [Movel, Product]);
    const product = new Sofa('Meu sofá');
    console.log(product.buy(40));
    console.log(product.sell(40));
    console.log(product.toPush(40));
})(ProductNamespace || (ProductNamespace = {}));
