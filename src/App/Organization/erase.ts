//Necessário para o req, res não apresentarem erros
import { Request, Response } from 'express';
import OrganizationModel from '../../Infra/Models/organizationModel';

async function erase(req: Request, res: Response) {
  try {
    const orgDelete = await OrganizationModel.findOneAndDelete({ id: req.params.id });
    res.status(200).json({ data: orgDelete, message: 'Usuario apagado' });
  } catch (error) {
    return res.json({ msg: 'erro' });
  }
}

module.exports = erase;
