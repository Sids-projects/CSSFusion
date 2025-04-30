import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Components
import { HomeComponent } from './home/home.component';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

// Module
import { ComponentsModule } from './components/components.module';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { TemplatesModule } from './templates/templates.module';
import { TemplatesRoutingModule } from './templates/templates-routing.module';

// Library
import { CssFusionModule } from './../../projects/css-fusion/src/lib/css-fusion.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatStepperModule,
    CssFusionModule,
    ComponentsModule,
    ComponentsRoutingModule,
    TemplatesModule,
    TemplatesRoutingModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
