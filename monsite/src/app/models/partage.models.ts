export class Partage {
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
  }