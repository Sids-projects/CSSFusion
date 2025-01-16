import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizerComponent } from './customizer.component';

const routes: Routes = [
  {
    path: 'CustomizerRouting',
    component: CustomizerComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizerRoutingModule {}
