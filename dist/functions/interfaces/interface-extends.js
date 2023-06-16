"use strict";
const newUser = {
    id: 1,
    name: 'Michel',
    email: 'mich@dev.com',
    password: '1234',
    createdAt: new Date(),
    updatedAt: new Date()
};
console.log(newUser);
newUser.age = 21;
console.log(newUser);
