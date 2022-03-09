import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Partage } from 'src/app/core/models/partage.models';
import { partagePhotoService } from 'src/app/core/services/partage-photo.services';

@Component({
  selector: 'app-partage',
  templateUrl: './partage.component.html',
  styleUrls: ['./partage.component.scss']
})
export class PartageComponent implements OnInit{
  @Input() partage!: Partage;
  buttonTexte!: string;

  constructor(private partagephotoService: partagePhotoService,
              private router: Router) {}

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

  onViewPhoto(){
    this.router.navigateByUrl(`photo/${this.partage.id}`)

  }
}
