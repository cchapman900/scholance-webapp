import {Asset} from './asset.model';

export class Entry {
  _id: string;
  student: string;
  commentary?: string;
  assets?: [Asset];
  status?: string;
}
