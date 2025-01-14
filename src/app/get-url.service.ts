import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetUrlService {
  private navVisibility = new BehaviorSubject<boolean>(true);
  private currentRouteSegment = new BehaviorSubject<string>('');
  private currentSubRouteSegment = new BehaviorSubject<string>('');
  private hideNavRoutes: string[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const urlSegments = this.router.url
          .split('/')
          .filter((segment) => segment);
        const currentSegment = urlSegments[0] || '';
        const subSegment = urlSegments[1] || '';
        this.currentRouteSegment.next(currentSegment);
        this.currentSubRouteSegment.next(subSegment);

        const shouldHideNav = this.hideNavRoutes.includes(this.router.url);
        this.navVisibility.next(!shouldHideNav);
      });
  }

  setHideNavRoutes(routes: string[]): void {
    this.hideNavRoutes = routes;
  }

  getNavVisibility() {
    return this.navVisibility.asObservable();
  }

  getCurrentRouteSegment() {
    return this.currentRouteSegment.asObservable();
  }

  getCurrentSubRouteSegment() {
    return this.currentSubRouteSegment.asObservable();
  }
}
