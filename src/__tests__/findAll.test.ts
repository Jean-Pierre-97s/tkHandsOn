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

test('Deve listar todos as empresas', async () => {
  const res = await req.get('/company');
  expect(res.status).toBe(201);
  expect(res.body.data.length).toBeGreaterThanOrEqual(0);
});
