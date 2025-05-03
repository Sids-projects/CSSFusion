import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
})
export class TemplatesComponent {
  constructor(private router: Router) {}

  redirectTo(param: any) {
    this.router.navigate([param]);
  }
}
