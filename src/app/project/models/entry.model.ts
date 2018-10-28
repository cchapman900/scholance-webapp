import {Asset} from './asset.model';
import {Comment} from '../../shared/models/comment.model';

export class Entry {
  _id: string; // This will get confusing that we're actually treating the student id as the entry id, but we also need the student.
  student: {
    _id: string,
    name: string
  };
  commentary?: string;
  assets?: [Asset];
  submissionStatus?: string;
  comments?: [Comment];
  selected?: boolean;
}
