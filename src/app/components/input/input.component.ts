import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  themeClr: string = '';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
