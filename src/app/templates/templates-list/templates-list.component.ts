import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrl: './templates-list.component.scss',
})
export class TemplatesListComponent {
  constructor(private router: Router) {}

  redirectTo(param: any) {
    this.router.navigate([param]);
  }
}
