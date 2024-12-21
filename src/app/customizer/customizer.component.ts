import { Component } from '@angular/core';
import { GetUrlService } from '../get-url.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss',
})
export class CustomizerComponent {
  showNav = true;

  // Define the routes to hide in the component
  private hideNavRoutes = ['/CustomizerRouting/CustomizerAppRoute'];

  constructor(private getUrlService: GetUrlService) {
    // Pass the routes to the service
    this.getUrlService.setHideNavRoutes(this.hideNavRoutes);

    // Subscribe to the visibility status
    this.getUrlService.getNavVisibility().subscribe((isVisible) => {
      this.showNav = isVisible;
    });
  }
}
