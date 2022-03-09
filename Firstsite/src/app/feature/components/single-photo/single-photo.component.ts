import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Partage } from 'src/app/core/models/partage.models';
import { partagePhotoService } from 'src/app/core/services/partage-photo.services';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit {
  //partage!: Partage;
  partage$!: Observable<Partage>;
  buttonTexte!: string;

  constructor(private partagephotoService: partagePhotoService,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.buttonTexte = 'liker';
    const photoid = +this.route.snapshot.params['id'];
    this.partage$ = this.partagephotoService.getphotoById(photoid)
  }

  onAddLike(partageid : number) {
    /* this.like++;
    if(this.buttonTexte === "liker"){
      this.partagephotoService.photoById(this.partage.id, 'like');
      this.buttonTexte = "oups, ne pas liker";
    }else{
      this.partagephotoService.photoById(this.partage.id, 'unlike');
      this.buttonTexte = "liker";
    } */
    if(this.buttonTexte === "liker"){
      this.partage$ = this.partagephotoService.photoById(partageid, 'like').pipe(
        tap(() => this.buttonTexte = "oups, ne pas liker")
      )
    }else{
      this.partagephotoService.photoById(partageid, 'unlike').pipe(
        tap(() => {
          this.partage$ = this.partagephotoService.getphotoById(partageid)
          this.buttonTexte = "liker";
        })
      ).subscribe();
    }
  }
}
