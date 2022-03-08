import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PartageComponent } from './partage/partage.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPartageComponent } from './new-partage/new-partage.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    PartageComponent,
    PhotoListComponent,
    LandingPageComponent,
    SinglePhotoComponent,
    NewPartageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
