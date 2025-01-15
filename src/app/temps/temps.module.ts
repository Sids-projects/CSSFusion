import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Module
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
import { TempsComponent } from './temps.component';
import { SpectrumComponent } from './components/spectrum/spectrum.component';
import { LuxeSeriesComponent } from './components/luxe-series/luxe-series.component';
import { NeoComponent } from './components/neo/neo.component';
import { ClassicGridComponent } from './components/classic-grid/classic-grid.component';
import { VividEdgeComponent } from './components/vivid-edge/vivid-edge.component';
import { HarmonySuiteComponent } from './components/harmony-suite/harmony-suite.component';

@NgModule({
  declarations: [
    TempsComponent,
    SpectrumComponent,
    LuxeSeriesComponent,
    NeoComponent,
    ClassicGridComponent,
    VividEdgeComponent,
    HarmonySuiteComponent,
  ],
  imports: [CommonModule, RouterModule, MatIconModule, MatSlideToggleModule],
})
export class TempsModule {}
