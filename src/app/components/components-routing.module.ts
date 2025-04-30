import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ComponentsComponent } from './components.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';
import { ComponentsListComponent } from './components-list/components-list.component';

const routes: Routes = [
  {
    path: 'Components',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'Component_List', pathMatch: 'full' },
      { path: 'Component_List', component: ComponentsListComponent },
      { path: 'Component_Accordion', component: AccordionComponent },
      { path: 'Component_Button', component: ButtonComponent },
      { path: 'Component_Card', component: CardComponent },
      { path: 'Component_Dropdown', component: DropdownComponent },
      { path: 'Component_Input', component: InputComponent },
      { path: 'Component_Menubar', component: MenubarComponent },
      { path: 'Component_Nav', component: NavComponent },
      { path: 'Component_Table', component: TableComponent },
      { path: 'Component_Tab', component: TabComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
