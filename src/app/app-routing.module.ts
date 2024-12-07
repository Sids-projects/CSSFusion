import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
})
export class AppRoutingModule {}
