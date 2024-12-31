import { Component, HostBinding, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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
  selectCompProp: any = '';
  closePopup: boolean = true;
  private accordionInitialized = false;
  @HostBinding('class') componentTheme = '';
  accordionForm!: FormGroup;

  constructor(private themeService: ThemeService, private fb: FormBuilder) {}

  ngOnInit() {
    this.showTools('artboards');

    this.themeService.currentTheme.subscribe((theme) => {
      this.componentTheme = theme;
    });

    this.accordionForm = this.fb.group({
      accordions: this.fb.array([]),
    });

    this.addAccordion();
  }

  ngAfterViewChecked() {
    if (this.selectCompProp === 'accordion' && !this.accordionInitialized) {
      this.accordionInitialized = true;
      this.accordion();
    }
  }

  accordion() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    if (accordionElements.length) {
      new Accordion(accordionElements as NodeListOf<HTMLElement>);
    }
  }

  get accordions(): FormArray {
    return this.accordionForm.get('accordions') as FormArray;
  }

  // Add a new accordion to the FormArray
  addAccordion() {
    this.accordions.push(
      this.fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      })
    );
  }

  // Remove an accordion from the FormArray
  removeAccordion(index: number): void {
    this.accordions.removeAt(index);
  }

  // Submit the form
  onSubmit() {
    if (this.accordionForm.valid) {
      console.log(this.accordionForm.value);
    } else {
      console.log(this.accordionForm.value);
    }
    this.closePopup = false;

    setTimeout(() => {
      this.accordion();
    });
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
}
