import { Component } from '@angular/core';
import { Dropdown } from '../../../../projects/css-fusion/src/public-api';

// import { Dropdown } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  themeClr: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const dropdownElements = document.querySelectorAll('.dropdown');
    new Dropdown(dropdownElements as NodeListOf<HTMLElement>);
  }
}
