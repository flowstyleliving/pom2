namespace app.i {
  export interface INote {
    _id: any;
    title: string;

    user: (string | IUser);
    task: (string | ITask);
  }
}
