import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLinear = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    Prism.highlightAll();
  }

  redirectTo() {
    this.router.navigate(['Components']);
  }
}
