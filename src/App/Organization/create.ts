//Necessário para o req, res não apresentarem erros
import { Request, Response } from 'express';
import OrganizationModel from '../../Infra/Models/organizationModel';
import { IOrganization } from '../../Infra/Models/organizationTypes';

async function create(req: Request, res: Response) {
  const { cidade, email, cnpj, contato, endereco, estado, nome, telefone }: IOrganization = req.body;
  try {
    const newOrganization = new OrganizationModel({
      cnpj,
      nome,
      email,
      endereco,
      cidade,
      estado,
      contato,
      telefone
    });
    await newOrganization.save();
    res.status(201).json({ data: newOrganization });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = create;
