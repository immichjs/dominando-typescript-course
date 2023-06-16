class IdentificationDocument {
  private value: string = '312023132-02'
  #number: number = 35

  public showDocument() {
    return this.#number
  }
}

class CNPJ extends IdentificationDocument {
  #number: number = 50

  public showDocument(): number {
    return this.#number
  }
}

const rg = new IdentificationDocument()
console.log(rg.showDocument())

const cnpj = new CNPJ()
console.log(cnpj.showDocument())
