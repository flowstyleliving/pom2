namespace app.i {
  export interface IUser {
    _id: any;
    email: string;
    password: string;
    name: string;
    
    tasks?: Array<string>;
    notes?: Array<string>;
    facebook: {id: string, token: string};
  }
}
