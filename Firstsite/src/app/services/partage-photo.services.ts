import { Injectable } from '@angular/core';
import { Partage } from '../models/partage.models';

@Injectable({
  providedIn: 'root'
})
export class partagePhotoService {
    myphoto:Partage[] = [
        {
          id: 1,
          title: "pierre",
          description: "c'est une personne",
          date: new Date(),
          like: 40,
          imageURL: "https://img-19.ccm2.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
          location: 'Paris'
        },
        {
          id: 2,
          title: "jean",
          description: "c'est une deuxième personne",
          date: new Date(),
          like: 840,
          imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Himalayas.jpg/330px-Himalayas.jpg",
          location: 'la montagne'
        },
        {
          id: 3,
          title: "nicolas",
          description: "c'est une 3ème personne",
          date: new Date(),
          like: 130,
          imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Alpamayo.jpg/330px-Alpamayo.jpg",
        }
  
      ];

    getAllPhoto(): Partage[] {
      return this.myphoto;
    }

    getphotoById(photoId: number): Partage {
      const myphoto = this.myphoto.find(myphoto => myphoto.id === photoId);
      if (!myphoto) {
          throw new Error('photo not found!');
      } else {
          return myphoto;
      }
    }

    photoById(photoId: number, photoType: 'like' | 'unlike'): void {
      const myphoto = this.getphotoById(photoId);
      photoType === 'like' ? myphoto.like++ : myphoto.like--;
    }

    addphoto(formValue: { title: string, description: string, imageURL: string, location?: string }) {
      const partage: Partage = {
          ...formValue,
          like: 0,
          date: new Date(),
          id: this.myphoto[this.myphoto.length - 1].id + 1
      };
      this.myphoto.push(partage);
  }

}