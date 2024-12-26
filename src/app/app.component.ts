import { Component, OnInit } from '@angular/core';
import { GetUrlService } from './get-url.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CSSFusion';
  showNav: boolean = true;
  isDarkMode = false;
  currentComp: string = '';
  private hideNavRoutes = ['/CustomizerRouting/CustomizerAppRoute'];

  constructor(
    private getUrlService: GetUrlService,
    private themeService: ThemeService
  ) {
    this.getUrlService.setHideNavRoutes(this.hideNavRoutes);

    this.getUrlService.getNavVisibility().subscribe((isVisible) => {
      this.showNav = isVisible;
    });

    this.getUrlService.getCurrentRouteSegment().subscribe((segment) => {
      this.currentComp = segment;
    });
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isDarkMode = theme === 'dark-mode';
      document.documentElement.setAttribute('class', theme);
    });
  }

  toggleTheme(): void {
    const newTheme = this.isDarkMode ? 'light-mode' : 'dark-mode';
    this.themeService.setTheme(newTheme);
  }
}
