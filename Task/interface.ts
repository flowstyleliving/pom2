namespace app.i {
  export interface ITask {
    _id: any;
    title: string;
    datePosted: number;
    dateDue: number;
    color: string;
    complete: boolean;

    user: (string | IUser);
    notes: [string | INote]
  }
}
