import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss',
})
export class ComponentsListComponent {
  constructor(private router: Router) {}

  redirectTo(param: any) {
    this.router.navigate([param]);
  }
}
