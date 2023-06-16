interface IModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IPerson extends IModel {
  name: string;
  age?: number;
}

interface IUser extends IPerson {
  email: string;
  password: string;
}

const newUser: IUser = {
  id: 1,
  name: 'Michel',
  email: 'mich@dev.com',
  password: '1234',
  createdAt: new Date(),
  updatedAt: new Date()
}
console.log(newUser)

newUser.age = 21
console.log(newUser)

