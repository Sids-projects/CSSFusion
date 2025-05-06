import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  @ViewChild('navList') navList!: ElementRef<HTMLDivElement>;

  scrollNav(direction: 'left' | 'right') {
    const scrollAmount = 200;
    if (direction === 'left') {
      this.navList.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      this.navList.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }
}
