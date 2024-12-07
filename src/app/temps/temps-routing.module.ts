import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempsComponent } from './temps.component';
import { ClassicGridComponent } from './components/classic-grid/classic-grid.component';
import { HarmonySuiteComponent } from './components/harmony-suite/harmony-suite.component';
import { LuxeSeriesComponent } from './components/luxe-series/luxe-series.component';
import { NeoComponent } from './components/neo/neo.component';
import { SpectrumComponent } from './components/spectrum/spectrum.component';
import { VividEdgeComponent } from './components/vivid-edge/vivid-edge.component';

const routes: Routes = [
  {
    path: 'TempsRouting',
    component: TempsComponent,
    children: [
      { path: 'ClassicGridRoute', component: ClassicGridComponent },
      { path: 'HarmonySuiteRoute', component: HarmonySuiteComponent },
      { path: 'LuxeSeriesRoute', component: LuxeSeriesComponent },
      { path: 'NeoRoute', component: NeoComponent },
      { path: 'SpectrumRoute', component: SpectrumComponent },
      { path: 'VividEdgeRoute', component: VividEdgeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempsRoutingModule {}
