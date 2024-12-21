import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showNav: boolean = true;
  screenWidth: number = window.innerWidth;
  features: any[] = [
    {
      title: 'Comprehensive Utilities',
      sentence:
        'A wide array of CSS utilities for styling common and advanced elements.',
    },
    {
      title: 'Customizable',
      sentence:
        "Tailor utilities and variables to match your project's needs effortlessly.",
    },
    {
      title: 'Lightweight and Performant',
      sentence: 'Designed to minimize bloat and maximize speed.',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNav = event.url === '/' || event.urlAfterRedirects === '/';
      }
    });
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  navigate() {
    this.showNav = false;
  }

  portfolioContent: any[] = [];
  cardOneActive: boolean = false;
  cardTwoActive: boolean = false;
  cardThreeActive: boolean = false;
  portfolioMainIf: boolean = true;
  soleJourneyMainIf: boolean = false;

  cardOne() {
    this.cardOneActive = !this.cardOneActive;
    this.cardTwoActive = false;
    this.cardThreeActive = false;
  }

  cardTwo() {
    this.cardOneActive = false;
    this.cardTwoActive = !this.cardTwoActive;
    this.cardThreeActive = false;
  }

  cardThree() {
    this.cardOneActive = false;
    this.cardTwoActive = false;
    this.cardThreeActive = !this.cardThreeActive;
  }
}
