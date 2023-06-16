"use strict";
class Company {
    providingService() {
        return 'Empresa prestando serviços';
    }
}
class Hospital extends Company {
    providingService() {
        return 'Empresa prestando serviços hospitalares';
    }
}
console.log(new Company().providingService());
console.log(new Hospital().providingService());
