import {Organization} from './organization.model';
import {Project} from '../../project/models/project.model';
import {Asset} from '../../project/models/asset.model';

export class User {
  _id?: string;
  name: string;
  photo?: string;
  email: string;
  about?: string;
  userType?: string;
  organization?: Organization;
  school?: string;
  academicFocus?: string;
  interests?: string;
  position?: string;
  projects?: [Project];
  linkedin: string;
  twitter: string;
  website: string;
  instagram: string;
  portfolioEntries: [{
    project: {
      title: string,
      organization: string,
      liaison: string,
      summary: string
    },
    submission: {
      assets: [Asset],
      commentary: string
    },
    visible: boolean
  }];
}
