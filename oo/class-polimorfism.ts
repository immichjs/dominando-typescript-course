class Company {
  providingService(): string {
    return 'Empresa prestando serviços'
  }
}

class Hospital extends Company {
  providingService(): string {
    return 'Empresa prestando serviços hospitalares'
  }
}

console.log(new Company().providingService())
console.log(new Hospital().providingService())
