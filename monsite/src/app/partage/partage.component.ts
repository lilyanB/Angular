import { Component, OnInit, Input} from '@angular/core';
import { Partage } from '../models/partage.models';

@Component({
  selector: 'app-partage',
  templateUrl: './partage.component.html',
  styleUrls: ['./partage.component.scss']
})
export class PartageComponent implements OnInit{
  @Input() partage!: Partage;
  buttonTexte!: string;

  ngOnInit(){
    this.buttonTexte = 'liker'
  }

  onAddLike() {
    /* this.like++; */
    if(this.buttonTexte === "liker"){
      this.partage.like++;
      this.buttonTexte = "oups, ne pas liker";
    }else{
      this.partage.like--;
      this.buttonTexte = "liker";
    }
  }
}
