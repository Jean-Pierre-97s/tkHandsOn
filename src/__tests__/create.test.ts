import { connect, disconnect } from '../Infra/Database/database';
import { mockedUser } from './mocks/mockedUser';
import supertest from 'supertest';
import App from '../App/app';

const req = supertest(App.server.App);

beforeAll(() => {
  connect();
});

afterAll(() => {
  disconnect();
});

test('Deve inserir empresa com sucesso', async () => {
  let res = await req.post('/company')
    .send({
      cnpj: mockedUser.cnpj,
      nome: mockedUser.nome,
      email: mockedUser.email,
      endereco: mockedUser.endereco,
      cidade: mockedUser.cidade,
      estado: mockedUser.estado,
      contato: mockedUser.contato,
      telefone: mockedUser.telefone,
    });
  expect(res.status).toBe(201);
  expect(res.body.data.cnpj).toBe(mockedUser.cnpj);
  expect(res.body.data.nome).toBe(mockedUser.nome);
  expect(res.body.data.email).toBe(mockedUser.email);
  expect(res.body.data.endereco).toBe(mockedUser.endereco);
  expect(res.body.data.cidade).toBe(mockedUser.cidade);
  expect(res.body.data.estado).toBe(mockedUser.estado);
  expect(res.body.data.contato).toBe(mockedUser.contato);
  expect(res.body.data.telefone).toBe(mockedUser.telefone);

});

/*
test('Não deve inserir caso cnpj seja menor que 14', async () => {
  const res = await req.post('/company')
    .send({
      cnpj: Math.floor(Math.random() * 10000),
      nome: mockedUser.nome,
      email: mockedUser.email,
      endereco: mockedUser.endereco,
      cidade: mockedUser.cidade,
      estado: mockedUser.estado,
      contato: mockedUser.contato,
      telefone: mockedUser.telefone,
    });
  expect(res.status).toBe(400);
});
*/