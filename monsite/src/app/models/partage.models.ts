/* export class Partage {
    title: string;
    description: string;
    date: Date;
    like: number;
    imageURL: string;
    
    constructor(title: string, description: string, imageURL: string, date: Date, like: number) {
      this.title = title;
      this.description = description;
      this.imageURL = imageURL;
      this.date = date;
      this.like = like;
    }
  } */

export class Partage {
    constructor(public title: string,
                public description: string,
                public date: Date,
                public like: number,
                public imageURL: string,) {
    }
}