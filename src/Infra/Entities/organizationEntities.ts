import mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const OrganizationSchema = new mongoose.Schema({
    cnpj: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
});

OrganizationSchema.plugin(AutoIncrement, { inc_field: 'id' });

export default OrganizationSchema;