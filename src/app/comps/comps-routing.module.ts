import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompsComponent } from './comps.component';
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
  {
    path: 'CompsRouting',
    component: CompsComponent,
    children: [
      { path: 'AccordionRoute', component: AccordionComponent },
      { path: 'ButtonRoute', component: ButtonComponent },
      { path: 'CardRoute', component: CardComponent },
      { path: 'DropdownRoute', component: DropdownComponent },
      { path: 'InputsRoute', component: InputComponent },
      { path: 'MenuBarRoute', component: MenubarComponent },
      { path: 'NavRoute', component: NavComponent },
      { path: 'TableRoute', component: TableComponent },
      { path: 'TabsRoute', component: TabComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompsRoutingModule {}
