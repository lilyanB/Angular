import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { NewPartageComponent } from './new-partage/new-partage.component';

const routes: Routes = [
    { path: 'photo/:id', component: SinglePhotoComponent },
    { path: 'photopartage', component: PhotoListComponent},
    { path: 'create', component: NewPartageComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}