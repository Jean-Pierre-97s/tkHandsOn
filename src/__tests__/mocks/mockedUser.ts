/* istanbul ignore file */
const faker = require('faker');

export const mockedUser = {
    id: 0,
    cnpj: Math.floor(Math.random() * 100000000000000).toString(),
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    endereco: faker.address.streetName(),
    cidade: faker.address.city(),
    estado: faker.address.state(),
    contato: faker.phone.phoneNumber(),
    telefone: faker.phone.phoneNumber(),
};

