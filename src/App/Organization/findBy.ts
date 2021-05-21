//Necessário para o req, res não apresentarem erros
import { Request, Response } from 'express';
import OrganizationModel from '../../Infra/Models/organizationModel';

const findBy = {
  id: async (req: Request, res: Response) => {
    try {
      const organization = await OrganizationModel.find({ id: req.params.id });
      res.status(200).json({ data: organization });
    } catch (error) {
      return res.json({ msg: 'erro' });
    }
  },
  cnpj: async (req: Request, res: Response) => {
    try {
      const organization = await OrganizationModel.find({ cnpj: req.params.cnpj });
      res.status(200).json({ data: organization });
    } catch (error) {
      return res.json({ msg: 'erro' });
    }
  },
  name: async (req: Request, res: Response) => {
    try {
      const organization = await OrganizationModel.find({ nome: req.params.nome });
      res.status(200).json({ data: organization });
    } catch (error) {
      return res.json({ msg: 'erro' });
    }
  },
};

module.exports = findBy;
