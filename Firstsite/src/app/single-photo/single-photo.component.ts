import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partage } from '../models/partage.models';
import { partagePhotoService } from '../services/partage-photo.services';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit {
  partage!: Partage;
  buttonTexte!: string;

  constructor(private partagephotoService: partagePhotoService,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.buttonTexte = 'liker';
    const photoid = +this.route.snapshot.params['id'];
    this.partage = this.partagephotoService.getphotoById(photoid)
  }

  onAddLike() {
    /* this.like++; */
    if(this.buttonTexte === "liker"){
      this.partagephotoService.photoById(this.partage.id, 'like');
      this.buttonTexte = "oups, ne pas liker";
    }else{
      this.partagephotoService.photoById(this.partage.id, 'unlike');
      this.buttonTexte = "liker";
    }
  }
}
