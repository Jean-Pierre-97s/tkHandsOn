const create = require('./create');
const findAll = require('./findAll');
const findBy = require('./findBy');
const edit = require('./edit');
const erase = require('./erase');

export const Company = {
  findAll,
  create,
  findByID: findBy.id,
  findByName: findBy.name,
  findByCnpj: findBy.cnpj,
  edit,
  erase,
};
