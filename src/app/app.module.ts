import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

// Modules
import { CompsModule } from './comps/comps.module';
import { CompsRoutingModule } from './comps/comps-routing.module';
import { TempsModule } from './temps/temps.module';
import { TempsRoutingModule } from './temps/temps-routing.module';
import { CustomizerModule } from './customizer/customizer.module';
import { CustomizerRoutingModule } from './customizer/customizer-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompsModule,
    CompsRoutingModule,
    TempsModule,
    TempsRoutingModule,
    CustomizerModule,
    CustomizerRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
