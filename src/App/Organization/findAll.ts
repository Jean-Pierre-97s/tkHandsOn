//Necessário para o req, res não apresentarem erros
import { Request, Response } from 'express';
import OrganizationModel from '../../Infra/Models/organizationModel';


async function findAll(req: Request, res: Response) {
  try {
    const organization = await OrganizationModel.find({});
    res.status(201).json({ data: organization });
  } catch (error) {
    return res.json({ msg: 'erro' });
  }
}

module.exports = findAll;
