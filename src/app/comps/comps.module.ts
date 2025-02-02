import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Module
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
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
import { CompsCodeComponent } from './comps-code/comps-code.component';
import { VariablesComponent } from './components/variables/variables.component';

@NgModule({
  declarations: [
    CompsComponent,
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
    VariablesComponent,
  ],
  imports: [CommonModule, RouterModule, MatIconModule, MatSlideToggleModule],
})
export class CompsModule {}
