import {Organization} from './organization.model';
import {Project} from '../../project/models/project.model';

export class User {
  _id: string;
  name: string;
  photo: string;
  email: string;
  about: string;
  userType: string;
  organization?: Organization;
  projects?: [Project];
}
