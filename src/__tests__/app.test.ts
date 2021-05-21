import supertest from 'supertest';
import App from '../App/app'
import { connect, disconnect } from '../Infra/Database/database';

const req = supertest(App.server.App);

beforeAll(() => {
  connect();
});

afterAll(() => {
  disconnect();
});

test('Deve responder na raiz na porta 3001', async () => {
  const res = await req.get('/company')
  expect(res.status).toBe(201);
});
