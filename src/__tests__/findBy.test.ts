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

test('Deve pesquisar por ID', async () => {
  const res = await req.get(`/company/searchById/${5}`);
  expect(res.status).toBe(200);
  expect(res.body.data[0].id).toBe(5);
});

test('Deve pesquisar por CNPJ', async () => {
  const res = await req.get('/company/searchByCnpj/33772235784097');
  expect(res.status).toBe(200);
  expect(res.body.data[0].cnpj).toBe('33772235784097');
});


test('Deve pesquisar por nome/Razão Social', async () => {
  const res = await req.get('/company/searchByName/Rigoberto');
  expect(res.status).toBe(200);
  expect(res.body.data[0].nome).toBe('Rigoberto');
});
