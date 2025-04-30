import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplatesRoutingModule } from './templates-routing.module';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

// Components
import { TemplatesComponent } from './templates.component';
import { ClassicPrimeComponent } from './classic-prime/classic-prime.component';
import { DarkFusionComponent } from './dark-fusion/dark-fusion.component';
import { MinimalEdgeComponent } from './minimal-edge/minimal-edge.component';
import { NeonFlowComponent } from './neon-flow/neon-flow.component';
import { SoftAuraComponent } from './soft-aura/soft-aura.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    ClassicPrimeComponent,
    DarkFusionComponent,
    MinimalEdgeComponent,
    NeonFlowComponent,
    SoftAuraComponent,
    TemplatesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatStepperModule,
  ],
})
export class TemplatesModule {}
