import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TemplatesComponent } from './templates.component';
import { ClassicPrimeComponent } from './classic-prime/classic-prime.component';
import { DarkFusionComponent } from './dark-fusion/dark-fusion.component';
import { MinimalEdgeComponent } from './minimal-edge/minimal-edge.component';
import { NeonFlowComponent } from './neon-flow/neon-flow.component';
import { SoftAuraComponent } from './soft-aura/soft-aura.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';

const routes: Routes = [
  {
    path: 'Templates',
    component: TemplatesComponent,
    children: [
      { path: '', redirectTo: 'Templates_list', pathMatch: 'full' },
      { path: 'Templates_list', component: TemplatesListComponent },
      { path: 'ClassicPrime_Component', component: ClassicPrimeComponent },
      { path: 'DarkFusion_Component', component: DarkFusionComponent },
      { path: 'MinimalEdge_Component', component: MinimalEdgeComponent },
      { path: 'NeonFlow_Component', component: NeonFlowComponent },
      { path: 'SoftAura_Component', component: SoftAuraComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
