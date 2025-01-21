import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GetUrlService } from '../services/get-url.service';
import { ThemeService } from '../services/theme.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-comps',
  templateUrl: './comps.component.html',
  styleUrls: ['./comps.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class CompsComponent implements OnInit {
  currentComp: string = '';
  currentSubComp: string = '';
  isDarkMode = false;

  constructor(
    private router: Router,
    private location: Location,
    private getUrlService: GetUrlService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.getUrlService.getCurrentRouteSegment().subscribe((segment) => {
      this.currentComp = segment;
    });

    this.getUrlService.getCurrentSubRouteSegment().subscribe((subSegment) => {
      this.currentSubComp = subSegment;
    });

    this.themeService.currentTheme.subscribe((theme) => {
      this.isDarkMode = theme === 'dark-mode';
      document.documentElement.setAttribute('class', theme);
    });
  }

  redirect() {
    this.location.back();
  }

  toggleTheme(): void {
    const newTheme = this.isDarkMode ? 'light-mode' : 'dark-mode';
    this.themeService.setTheme(newTheme);
  }
}
