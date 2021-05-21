import express from 'express';
const Server = require('../Infra/Interfaces/server');
const route = require('../config/routes');
const swaggerUI = require('swagger-ui-express');
import { swaggerDocument } from "../../swagger";
import dotenv from 'dotenv';
dotenv.config();

const App = {
  server: Server,
  start() {
    this.server.listen();
  },
};

App.server.App.use(express.json());
App.server.App.use('/company', route);
App.server.App.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default App;
