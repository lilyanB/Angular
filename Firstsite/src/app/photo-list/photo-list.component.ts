import { Component, OnInit } from '@angular/core';
import { Partage } from '../models/partage.models';
import { partagePhotoService } from '../services/partage-photo.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  myphoto!: Partage[];

  constructor(private partagephotoservice : partagePhotoService) { }

  ngOnInit(): void {
    this.myphoto = this.partagephotoservice.getAllPhoto();
  }

}
