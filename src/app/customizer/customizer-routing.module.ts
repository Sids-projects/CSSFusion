import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizerComponent } from './customizer.component';
import { CustomizerAppComponent } from './components/customizer-app/customizer-app.component';
import { CustomizerGuideComponent } from './components/customizer-guide/customizer-guide.component';

const routes: Routes = [
  {
    path: 'CustomizerRouting',
    component: CustomizerComponent,
    children: [
      { path: 'CustomizerGuideRoute', component: CustomizerGuideComponent },
      { path: 'CustomizerAppRoute', component: CustomizerAppComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizerRoutingModule {}
