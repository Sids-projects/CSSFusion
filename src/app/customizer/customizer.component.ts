import { Component, HostBinding, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

// Services
import { ThemeService } from '../theme.service';

// Components
import { Accordion } from './../../../projects/css-fusion/src/lib/ts/index';
// import { Accordion } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss',
})
export class CustomizerComponent {
  showToolsKey: any[] = [];
  showMenuName: string = 'artboards';
  showMenuForm: boolean = true;
  unsavedChanges: boolean = true;
  respoProp: string = 'desktop';
  selectCompProp: any = '';
  closePopup: boolean = true;
  private accordionInitialized = false;
  @HostBinding('class') componentTheme = '';
  accordionFields!: FormGroup;
  accordionForm!: FormGroup;

  // Accordion Props
  accGrupLay: boolean = false;
  accGrupMode: boolean = false;
  accGrupWidth: string = '';

  constructor(private themeService: ThemeService, private fb: FormBuilder) {}

  ngOnInit() {
    this.themeService.currentTheme.subscribe((theme) => {
      this.componentTheme = theme;
    });

    this.accordionForm = this.fb.group({
      grupLayoutType: [''],
      grupColourMode: [''],
      grupWidth: [''],
      grupBorderWeight: [''],
      grupBorderStyle: [''],
      grupPadding: [''],
      grupGap: [''],
    });

    this.accordionFields = this.fb.group({
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
    return this.accordionFields.get('accordions') as FormArray;
  }

  addAccordion() {
    this.accordions.push(
      this.fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      })
    );
  }

  removeAccordion(index: number): void {
    this.accordions.removeAt(index);
  }

  onSubmit() {
    if (this.accordionFields.valid) {
      console.log(this.accordionFields.value);
    } else {
      console.log(this.accordionFields.value);
    }
    this.closePopup = false;

    setTimeout(() => {
      this.accordion();
    });
  }

  AccMenuClick(section: string, value: string): void {
    this.accordionForm.get(section)?.setValue(value);

    // Group Layout
    if (this.accordionForm.get('grupLayoutType')?.value === 'Grid') {
      this.accGrupLay = true;
    } else if (this.accordionForm.get('grupLayoutType')?.value === 'Rows') {
      this.accGrupLay = false;
    }
    // Group Colour Mode
    if (this.accordionForm.get('grupColourMode')?.value === 'DarkMode') {
      this.accGrupMode = true;
    } else if (
      this.accordionForm.get('grupColourMode')?.value === 'LightMode'
    ) {
      this.accGrupMode = false;
    }
    // Group Width
    if (this.accordionForm.get('grupWidth')?.value === 'M') {
      this.accGrupWidth = 'width-md';
    } else if (this.accordionForm.get('grupWidth')?.value === 'L') {
      this.accGrupWidth = 'width-lg';
    } else if (this.accordionForm.get('grupWidth')?.value === 'Xl') {
      this.accGrupWidth = 'width-xl';
    } else if (this.accordionForm.get('grupWidth')?.value === 'Xxl') {
      this.accGrupWidth = 'width-xxl';
    } else {
      this.accGrupWidth = '';
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

  // Initilization
  toggleTheme(): void {
    const newTheme =
      this.componentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.themeService.setTheme(newTheme);
  }
}
