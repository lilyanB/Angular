import { Component, OnInit } from '@angular/core';
import { Partage } from './models/partage.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myphoto!: Partage[];

  ngOnInit() {
    this.myphoto = [
      {
        title: "pierre",
        description: "c'est une personne",
        date: new Date(),
        like: 7,
        imageURL: "https://img-19.ccm2.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
        location: 'Paris'
      },
      {
        title: "jean",
        description: "c'est une deuxième personne",
        date: new Date(),
        like: 863,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Himalayas.jpg/330px-Himalayas.jpg",
        location: 'la montagne'
      },
      {
        title: "nicolas",
        description: "c'est une 3ème personne",
        date: new Date(),
        like: 75,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Alpamayo.jpg/330px-Alpamayo.jpg",
      }

    ];
  }
}