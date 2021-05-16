export class User {
  private _id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(_id: string, name: string, email: string, password: string) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
