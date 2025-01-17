import { Component, OnInit } from '@angular/core';
import { GetUrlService } from './services/get-url.service';
import { ThemeService } from './services/theme.service';

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

  constructor(
    private getUrlService: GetUrlService,
    private themeService: ThemeService
  ) {
    this.getUrlService.getCurrentRouteSegment().subscribe((segment) => {
      this.currentComp = segment;
      this.showNav = segment === 'HomeRoute';
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
