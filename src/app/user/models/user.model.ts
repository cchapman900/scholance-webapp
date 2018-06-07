import {Organization} from './organization.model';

export class User {
  _id: string;
  name: string;
  email: string;
  userType: string;
  organization?: Organization;
}
