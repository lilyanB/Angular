import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Partage } from '../models/partage.models';

@Injectable({
  providedIn: 'root'
})
export class partagePhotoService {

  constructor(private http: HttpClient){}


  myphoto:Partage[] = []
    /* myphoto:Partage[] = [
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
  
      ]; */

    /* getAllPhoto(): Partage[] {
      return this.myphoto;
    } */

    getAllPhoto(): Observable<Partage[]> {
      return this.http.get<Partage[]>('http://localhost:3000/facesnaps');
    }

    getphotoById(photoId: number): Observable<Partage> {
      /* const myphoto = this.myphoto.find(myphoto => myphoto.id === photoId);
      if (!myphoto) {
          throw new Error('photo not found!');
      } else {
          return myphoto;
      } */
      return this.http.get<Partage>(`http://localhost:3000/facesnaps/${photoId}`)
    }

    photoById(photoId: number, photoType: 'like' | 'unlike'): Observable<Partage> {
      /* const myphoto = this.getphotoById(photoId);
      photoType === 'like' ? myphoto.like++ : myphoto.like--; */
      return this.getphotoById(photoId).pipe(
        map(photo =>({
          ...photo,
          like: photo.like + (photoType === 'like' ? 1 : -1)
        })),
        switchMap(updatephoto => this.http.put<Partage>(`http://localhost:3000/facesnaps/${photoId}`, updatephoto))
      )
    }

    addphoto(formValue: { title: string, description: string, imageURL: string, location?: string }): Observable<Partage> {
      /* const partage: Partage = {
          ...formValue,
          like: 0,
          date: new Date(),
          id: this.myphoto[this.myphoto.length - 1].id + 1
      };
      this.myphoto.push(partage); */
      return this.getAllPhoto().pipe(
        map(photo => [...photo].sort((a : Partage, b: Partage) => a.id - b.id)),
        map(sortedPhoto => sortedPhoto[sortedPhoto.length -1]),
        map(previousphoto => ({
          ...formValue,
          like: 0,
          date: new Date(),
          id: previousphoto.id +1
        })),
        switchMap(newphoto => this.http.post<Partage>('http://localhost:3000/facesnaps', newphoto))
      )
  }

}