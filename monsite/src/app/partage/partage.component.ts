import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-partage',
  templateUrl: './partage.component.html',
  styleUrls: ['./partage.component.scss']
})
export class PartageComponent implements OnInit{
  title!: string;
  description!: string;
  date!: Date;
  like!: number;
  imageURL!: string;
  buttonTexte!: string;

  ngOnInit(){
    this.title = "pierre";
    this.description = "c'est une personne";
    this.date = new Date();
    this.like = 6;
    this.imageURL = "https://img-19.ccm2.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
    this.buttonTexte = 'liker'
  }

  onAddLike() {
    /* this.like++; */
    if(this.buttonTexte === "liker"){
      this.like++;
      this.buttonTexte = "oups, ne pas liker";
    }else{
      this.like--;
      this.buttonTexte = "liker";
    }
  }
}
