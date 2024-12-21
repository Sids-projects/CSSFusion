import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetUrlService {
  private navVisibility = new BehaviorSubject<boolean>(true);
  private hideNavRoutes: string[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
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
}
