import supertest from 'supertest';
import App from '../App/app';
import { mockedUser } from './mocks/mockedUser';

import { connect, disconnect } from '../Infra/Database/database';

const req = supertest(App.server.App);

beforeAll(() => {
  connect();
});

afterAll(() => {
  disconnect();
});

test('Deve editar usuario por ID', async () => {
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

  const res = await req.put(`/company/edit/${mockedUser.id}`)
    .send({
      nome: 'Jean alterado',
      endereco: 'alterado',
      cidade: 'alterado',
      estado: 'MG alterado',
      contato: 'alterado',
      telefone: 'alterado',
    });
  expect(res.status).toBe(200);
  expect(res.body.data.id).toBe(mockedUser.id);
  expect(res.body.data.nome).toBe('Jean alterado');
  expect(res.body.data.endereco).toBe('alterado');
  expect(res.body.data.cidade).toBe('alterado');
  expect(res.body.data.estado).toBe('MG alterado');
  expect(res.body.data.contato).toBe('alterado');
  expect(res.body.data.telefone).toBe('alterado');
  expect(res.body.message).toBe('Usuario editado');
});
