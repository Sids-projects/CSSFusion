import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MotionComponent } from './motion.component';

const routes: Routes = [
  {
    path: 'Motion',
    component: MotionComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotionRoutingModule {}
