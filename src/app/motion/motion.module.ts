import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MotionRoutingModule } from './motion-routing.module';

// Components
import { MotionComponent } from './motion.component';

// Library
import { CssFusionModule } from './../../../projects/css-fusion/src/lib/css-fusion.module';

@NgModule({
  declarations: [MotionComponent],
  imports: [CommonModule, RouterModule, CssFusionModule, MotionRoutingModule],
})
export class MotionModule {}
