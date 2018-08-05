import {Asset} from './asset.model';
import {Entry} from './entry.model';

export class Project {
  _id: string;
  title: string;
  summary: string;
  fullDescription: string;
  liaison: {
    _id: string,
    name: string
  };
  organization: {
    _id: string,
    name: string
  };
  entries?: [Entry];
  supplementalResources?: [Asset];
  status: string;
  specs: [string];
  deliverables: [{
    name: string,
    mediaType: [string]
  }];
  category: string;
  deadline: string;
  selectedEntry?: Entry;
  comments?: [Comment];
}
