import { model } from 'mongoose';
import { IOrganizationDocument } from './organizationTypes';
import OrganizationSchema from '../Entities/organizationEntities';

const OrganizationModel = model<IOrganizationDocument>('organization', OrganizationSchema);

export default OrganizationModel;