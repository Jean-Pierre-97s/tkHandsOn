import { mockedUser } from './mocks/mockedUser';
import supertest from 'supertest';
import App from '../App/app';
import { connect, disconnect } from '../Infra/Database/database';

const req = supertest(App.server.App);

beforeAll(() => {
  connect();
});

afterAll(() => {
  disconnect();
});

test('Deve apagar por ID', async () => {
  const insert = await req.post('/company')
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
  mockedUser.id = insert.body.data.id;
  const res = await req.delete(`/company/erase/${mockedUser.id}`);
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('Usuario apagado');
});

/*
test('Não deve apagar por id inexistente', async () => {
  const res = await req.delete('/company/erase/9999');
  expect(res.status).toBe(400);
  expect(res.body.message).toBe('Usuario não apagado');
});
*/