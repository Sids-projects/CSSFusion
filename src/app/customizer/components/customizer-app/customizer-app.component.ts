import { Component, HostBinding, HostListener } from '@angular/core';

// In App Imports
import { ThemeService } from '../../../theme.service';
import { Accordion } from './../../../../../projects/css-fusion/src/lib/ts/index';
// import { Accordion } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-customizer-app',
  templateUrl: './customizer-app.component.html',
  styleUrl: './customizer-app.component.scss',
})
export class CustomizerAppComponent {
  showToolsKey: any[] = [];
  showMenuName: string = 'artboards';
  showMenuForm: boolean = true;
  unsavedChanges: boolean = true;
  respoProp: string = 'desktop';
  selectCompProp: string = '';
  private accordionInitialized = false;
  @HostBinding('class') componentTheme = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.showTools('artboards');

    this.themeService.currentTheme.subscribe((theme) => {
      this.componentTheme = theme;
    });
  }

  ngAfterViewChecked() {
    if (this.selectCompProp === 'accordion' && !this.accordionInitialized) {
      this.accordionInitialized = true;
      this.accordion();
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.unsavedChanges) {
      $event.returnValue = true;
    }
  }

  showMenus(param: string) {
    this.showMenuForm = true;
    this.showMenuName = param;
  }

  selectComp(param: string) {
    this.selectCompProp = param;
  }

  respoScreen(param: string) {
    this.respoProp = param;
  }

  showTools(param: string) {
    this.showToolsKey = [param];
  }

  // Initilization
  toggleTheme(): void {
    const newTheme =
      this.componentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.themeService.setTheme(newTheme);
  }

  accordion() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    if (accordionElements.length) {
      new Accordion(accordionElements as NodeListOf<HTMLElement>);
    }
  }
}
