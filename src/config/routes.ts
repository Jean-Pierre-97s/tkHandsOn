const express = require('express');
const route = express.Router();
import { Company } from '../App/Organization/index';

route.get('/', Company.findAll);
route.post('/', Company.create);
route.get('/searchById/:id', Company.findByID);
route.get('/searchByCnpj/:cnpj', Company.findByCnpj);
route.get('/searchByName/:nome', Company.findByName);
route.put('/edit/:id', Company.edit);
route.delete('/erase/:id', Company.erase);

module.exports = route;
