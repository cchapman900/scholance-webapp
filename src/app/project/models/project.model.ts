import {Asset} from './asset.model';
import {Entry} from './entry.model';

export class Project {
  _id: string;
  title: string;
  summary: string;
  liaison: string;
  organization: {
    _id: string,
    name: string
  };
  entries?: [Entry];
  supplementalResources?: [Asset]
}
