import { Component, ElementRef } from '@angular/core';
import { Nav } from '../../../../../projects/css-fusion/src/public-api';
import { ThemeService } from '../../../services/theme.service';
// import { Nav } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  themeClr: string = '';
  private navLeftInstance!: Nav;

  constructor(private elRef: ElementRef, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.themeClr = theme;
    });
  }

  ngAfterViewInit() {
    const container = this.elRef.nativeElement.querySelector('.nav-left');
    if (container) {
      this.navLeftInstance = new Nav(container);
    } else {
      console.error('Container element .nav-left not found.');
    }
  }
}
