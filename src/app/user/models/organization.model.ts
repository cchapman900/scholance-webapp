import {User} from './user.model';

export class Organization {
  _id: string;
  name: string;
  domain: string;
  liaisons: [User];
  industry?: string;
  linkedin?: string;
  twitter?: string;
  about?: string;
  logo?: string;
}
