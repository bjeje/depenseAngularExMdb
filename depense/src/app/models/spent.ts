export class Spent {
  private _id: string;
  private category: string;
  private sub_category: string;
  private owner: string;
  private value: number;

  constructor(_id: string, category: string, sub_category: string, owner: string, value: number ) {
    this._id = _id;
    this.value = value;
    this.category = category;
    this.sub_category = category;
    this.owner = owner;
  }
}
