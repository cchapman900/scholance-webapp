import {Asset} from './asset.model';
import {Comment} from '../../shared/models/comment.model';

export class Entry {
  _id: string;
  student: {
    _id: string,
    name: string
  };
  commentary?: string;
  assets?: [Asset];
  submissionStatus?: string;
  comments?: [Comment]
}
