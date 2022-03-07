import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PartageComponent } from './partage/partage.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPartageComponent } from './new-partage/new-partage.component';

@NgModule({
  declarations: [
    AppComponent,
    PartageComponent,
    PhotoListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePhotoComponent,
    NewPartageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
