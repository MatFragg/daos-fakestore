export class Bundle {
  id: number;
  title:string;
  description:string;
  photoUrl:string;
  price:number;
  rating:number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.photoUrl = '';
    this.price = 0;
    this.rating = 0;
  }
}
