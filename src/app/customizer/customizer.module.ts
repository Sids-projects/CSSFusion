import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CustomizerComponent } from './customizer.component';
import { CustomizerAppComponent } from './components/customizer-app/customizer-app.component';
import { CustomizerGuideComponent } from './components/customizer-guide/customizer-guide.component';

@NgModule({
  declarations: [
    CustomizerComponent,
    CustomizerAppComponent,
    CustomizerGuideComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class CustomizerModule {}
