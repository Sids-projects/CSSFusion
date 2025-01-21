import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// Modules
import { CompsModule } from './comps/comps.module';
import { CompsRoutingModule } from './comps/comps-routing.module';
import { TempsModule } from './temps/temps.module';
import { TempsRoutingModule } from './temps/temps-routing.module';
import { CustomizerModule } from './customizer/customizer.module';
import { CustomizerRoutingModule } from './customizer/customizer-routing.module';
import { HomeComponent } from './home/home.component';
import { VsCodeComponent } from './tools/vs-code/vs-code.component';
import { CompsCardComponent } from './tools/comps-card/comps-card.component';
import { TempsCardComponent } from './tools/temps-card/temps-card.component';
import { CustomizerCardComponent } from './tools/customizer-card/customizer-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, VsCodeComponent, CompsCardComponent, TempsCardComponent, CustomizerCardComponent],
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
    MatIconModule,
    MatMenuModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
