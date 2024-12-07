import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [CommonModule, RouterModule],
})
export class CompsModule {}
