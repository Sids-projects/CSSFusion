import { Component, ElementRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  themeClr: string = '';

  constructor(private elRef: ElementRef, public themeService: ThemeService) {}

  ngOnInit(): void {}
}
