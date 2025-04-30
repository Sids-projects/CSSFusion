import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './components-routing.module';

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
import { CompsCodeComponent } from './comps-code/comps-code.component';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { ComponentsListComponent } from './components-list/components-list.component';

// Library
import { CssFusionModule } from './../../../projects/css-fusion/src/lib/css-fusion.module';

@NgModule({
  declarations: [
    ComponentsComponent,
    AccordionComponent,
    ButtonComponent,
    CardComponent,
    DropdownComponent,
    InputComponent,
    MenubarComponent,
    NavComponent,
    TableComponent,
    TabComponent,
    CompsCodeComponent,
    ComponentsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatStepperModule,
    CssFusionModule,
  ],
})
export class ComponentsModule {}
