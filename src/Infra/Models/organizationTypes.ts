import { Document, Model } from 'mongoose';

export interface IOrganization {
    cnpj: String,
    nome: String,
    email: String,
    endereco: String,
    cidade: String,
    estado: String,
    contato: String,
    telefone: String
};

export interface IOrganizationDocument extends IOrganization, Document { }

export interface IOrganizationModel extends Model<IOrganizationDocument> { }