import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { LandingPageModule } from './landing-page/landing-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeatureModule,
    LandingPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
