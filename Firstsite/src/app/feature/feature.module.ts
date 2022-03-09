import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartageComponent } from './components/partage/partage.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';
import { NewPartageComponent } from './components/new-partage/new-partage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PartageComponent,
    PhotoListComponent,    
    SinglePhotoComponent,
    NewPartageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],exports: [
    PartageComponent,
    PhotoListComponent,    
    SinglePhotoComponent,
    NewPartageComponent
  ]
})
export class FeatureModule { }
