import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeRoute', pathMatch: 'full' },

  // Components
  { path: 'HomeRoute', component: HomeComponent },

  // Modules
  {
    path: 'CompsModule',
    loadChildren: () =>
      import('./comps/comps.module').then((m) => m.CompsModule),
  },
  {
    path: 'TempsModule',
    loadChildren: () =>
      import('./temps/temps.module').then((m) => m.TempsModule),
  },
  {
    path: 'CustomizerModule',
    loadChildren: () =>
      import('./customizer/customizer.module').then((m) => m.CustomizerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
