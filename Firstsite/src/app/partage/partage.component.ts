import { Component, OnInit, Input} from '@angular/core';
import { Partage } from '../models/partage.models';
import { partagePhotoService } from '../services/partage-photo.services';

@Component({
  selector: 'app-partage',
  templateUrl: './partage.component.html',
  styleUrls: ['./partage.component.scss']
})
export class PartageComponent implements OnInit{
  @Input() partage!: Partage;
  buttonTexte!: string;

  constructor(private partagephotoService: partagePhotoService) {}

  ngOnInit(){
    this.buttonTexte = 'liker'
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
