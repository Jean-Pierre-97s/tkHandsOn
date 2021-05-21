//Necessário para o req, res não apresentarem erros
import { Request, Response } from 'express';
import OrganizationModel from '../../Infra/Models/organizationModel';

async function edit(req: Request, res: Response) {
  try {
    const orgUpdate = await OrganizationModel.findOneAndUpdate({ id: req.params.id }, { ...req.body }, { new: true });
    res.status(200).json({ data: orgUpdate, message: 'Usuario editado' });
  } catch (error) {
    return res.json({ msg: 'erro' });
  }
}

module.exports = edit;
