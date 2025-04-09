import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

// Components
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
import { CompsCodeComponent } from './components/comps-code/comps-code.component';

@NgModule({
  declarations: [
    AppComponent,
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
    NeonFlowComponent,
    MinimalEdgeComponent,
    SoftAuraComponent,
    DarkFusionComponent,
    ClassicPrimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
