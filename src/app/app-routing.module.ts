import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NeonFlowComponent } from './templates/neon-flow/neon-flow.component';
import { MinimalEdgeComponent } from './templates/minimal-edge/minimal-edge.component';
import { SoftAuraComponent } from './templates/soft-aura/soft-aura.component';
import { DarkFusionComponent } from './templates/dark-fusion/dark-fusion.component';
import { ClassicPrimeComponent } from './templates/classic-prime/classic-prime.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputComponent } from './components/input/input.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { TabComponent } from './components/tab/tab.component';

const routes: Routes = [
  // Templates
  { path: 'NeonFlow_Tempate', component: NeonFlowComponent },
  { path: 'MinimalEdge_Tempate', component: MinimalEdgeComponent },
  { path: 'SoftAura_Tempate', component: SoftAuraComponent },
  { path: 'DarkFusion_Tempate', component: DarkFusionComponent },
  { path: 'UiClassicPrime_Tempate', component: ClassicPrimeComponent },

  // Component
  { path: 'Component_Accordion', component: AccordionComponent },
  { path: 'Component_Button', component: ButtonComponent },
  { path: 'Component_Card', component: CardComponent },
  { path: 'Component_Dropdown', component: DropdownComponent },
  { path: 'Component_Input', component: InputComponent },
  { path: 'Component_Menubar', component: MenubarComponent },
  { path: 'Component_Nav', component: NavComponent },
  { path: 'Component_Table', component: TableComponent },
  { path: 'Component_Tab', component: TabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
