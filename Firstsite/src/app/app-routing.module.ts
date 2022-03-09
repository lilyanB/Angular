import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPartageComponent } from './feature/components/new-partage/new-partage.component';
import { SinglePhotoComponent } from './feature/components/single-photo/single-photo.component';
import { PhotoListComponent } from './feature/components/photo-list/photo-list.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

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