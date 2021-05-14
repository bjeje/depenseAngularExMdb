export class Income {
  private _id: string;
  private category: string;
  private owner: string;
  private value: number;

  constructor(_id: string, category: string, owner: string, value: number ) {
    this._id = _id;
    this.value = value;
    this.category = category;
    this.owner = owner;
  }
}
