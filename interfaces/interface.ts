let address: IAddress = {
  street: 'Av. Brasil',
  number: 236,
  code: '18103-659',
  city: 'Sorocaba',
  uf: 'SP',
  status: true
}

interface IAddress {
  street: string;
  number: number;
  code: string;
  city: string;
  uf: string;
  status: boolean;
}
