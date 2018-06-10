export class Project {
  _id: string;
  title: string;
  summary: string;
  liaison: string;
  organization: {
    _id: string,
    name: string
  };
}
