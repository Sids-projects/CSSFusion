import { Component, HostBinding, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'app-customizer-app',
  templateUrl: './customizer-app.component.html',
  styleUrl: './customizer-app.component.scss',
})
export class CustomizerAppComponent {
  btnForm!: FormGroup;
  btnName: string = 'Click';
  editWidthHeight: boolean = false;
  editPadding: boolean = false;
  editRadius: boolean = false;
  txtAlign: string = 'left';
  showToolsKey: any[] = [];
  showMenuName: string = 'artboards';
  changes: any = {};
  toolBarMenu: string = 'artboards';
  showMenuForm: boolean = true;
  moreMenu: boolean = false;
  unsavedChanges: boolean = true;
  zoom: number = 1;
  zoomIn: any;
  zoomOut: any;
  zoomPercentage: number = 100;
  padToggle: boolean = false;
  bdrToggle: boolean = false;

  customizeKey: boolean = true;
  componentsKey: boolean = false;

  txtAlignObj: any = [
    {
      isActive: true,
      icon: 'format_align_left',
      param: 'left',
    },
    {
      isActive: false,
      icon: 'format_align_center',
      param: 'center',
    },
    {
      isActive: false,
      icon: 'format_align_right',
      param: 'right',
    },
  ];

  respoProp: string = 'desktop';
  respoWidth: string = '';
  respoHeight: string = '';

  selectCompProp: string = '';

  @HostBinding('class') componentTheme = '';

  constructor(
    private snackBar: MatSnackBar,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.showTools('artboards');
    this.btnForm = new FormGroup({
      buttonName: new FormControl('Click'),
      fontSize: new FormControl(16),
      fontWeight: new FormControl(400),
      lineHeight: new FormControl(18),
      letterSpacing: new FormControl(0),
      // Width Height
      width: new FormControl('auto'),
      height: new FormControl('auto'),
      // Padding
      padding: new FormControl(0),
      paddingTop: new FormControl(0),
      paddingRight: new FormControl(0),
      paddingBottom: new FormControl(0),
      paddingLeft: new FormControl(0),
      // Colour
      backgroundColor: new FormControl('white'),
      textColor: new FormControl('black'),
      // Border Radius
      radius: new FormControl(0),
      radiusLTop: new FormControl(0),
      radiusRTop: new FormControl(0),
      radiusRBottom: new FormControl(0),
      radiusLBottom: new FormControl(0),
      // Border
      borderWidth: new FormControl(2),
      borderStyle: new FormControl('solid'),
      borderColor: new FormControl('black'),
    });

    this.makeChanges();

    this.themeService.currentTheme.subscribe((theme) => {
      this.componentTheme = theme;
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.unsavedChanges) {
      $event.returnValue = true;
    }
  }

  moreMenuFn() {
    this.moreMenu = !this.moreMenu;
  }

  txtAlignFn(param: string) {
    this.txtAlign = param;

    if (param === 'left') {
      this.txtAlignObj[0].isActive = true;
      this.txtAlignObj[1].isActive = false;
      this.txtAlignObj[2].isActive = false;
    } else if (param === 'center') {
      this.txtAlignObj[0].isActive = false;
      this.txtAlignObj[1].isActive = true;
      this.txtAlignObj[2].isActive = false;
    } else if (param === 'right') {
      this.txtAlignObj[0].isActive = false;
      this.txtAlignObj[1].isActive = false;
      this.txtAlignObj[2].isActive = true;
    }
  }

  showMenus(param: string) {
    this.showMenuForm = true;
    this.showMenuName = param;
  }

  widthHeightToggle(event: MatSlideToggleChange) {
    this.editWidthHeight = event.checked;

    if (this.editWidthHeight === true) {
      this.btnForm.patchValue({
        width: 100,
        height: 50,
      });
      this.btnForm.get('width')?.enable();
      this.btnForm.get('height')?.enable();
      this.makeChanges();
    } else if (this.editWidthHeight === false) {
      this.btnForm.patchValue({
        width: 'auto',
        height: 'auto',
      });
      this.btnForm.get('width')?.disable();
      this.btnForm.get('height')?.disable();
      this.makeChanges();
    }
  }

  paddingToggle(event: MatSlideToggleChange) {
    this.padToggle = event.checked;

    if (this.padToggle === true) {
      this.btnForm.patchValue({
        padding: 0,
      });
      this.btnForm.get('padding')?.disable();
      this.btnForm.get('paddingTop')?.enable();
      this.btnForm.get('paddingRight')?.enable();
      this.btnForm.get('paddingBottom')?.enable();
      this.btnForm.get('paddingLeft')?.enable();
      this.makeChanges();
    } else if (this.padToggle === false) {
      this.btnForm.patchValue({
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
      });
      this.btnForm.get('padding')?.enable();
      this.btnForm.get('paddingTop')?.disable();
      this.btnForm.get('paddingRight')?.disable();
      this.btnForm.get('paddingBottom')?.disable();
      this.btnForm.get('paddingLeft')?.disable();
      this.makeChanges();
    }
  }

  borderToggle(event: MatSlideToggleChange) {
    this.bdrToggle = event.checked;

    if (this.bdrToggle === true) {
      this.btnForm.patchValue({
        radius: 0,
      });
      this.btnForm.get('radius')?.disable();
      this.btnForm.get('radiusLTop')?.enable();
      this.btnForm.get('radiusRTop')?.enable();
      this.btnForm.get('radiusRBottom')?.enable();
      this.btnForm.get('radiusLBottom')?.enable();
      this.makeChanges();
    } else if (this.bdrToggle === false) {
      this.btnForm.patchValue({
        radiusLTop: 0,
        radiusRTop: 0,
        radiusRBottom: 0,
        radiusLBottom: 0,
      });
      this.btnForm.get('radius')?.enable();
      this.btnForm.get('radiusLTop')?.disable();
      this.btnForm.get('radiusRTop')?.disable();
      this.btnForm.get('radiusRBottom')?.disable();
      this.btnForm.get('radiusLBottom')?.disable();
      this.makeChanges();
    }
  }

  makeChanges() {
    this.btnName = this.btnForm.get('buttonName')?.value;
    if (this.editWidthHeight === false) {
      this.btnForm.get('width')?.disable();
      this.btnForm.get('height')?.disable();
    }

    if (this.padToggle === false) {
      this.btnForm.get('padding')?.enable();
      this.btnForm.get('paddingTop')?.disable();
      this.btnForm.get('paddingRight')?.disable();
      this.btnForm.get('paddingBottom')?.disable();
      this.btnForm.get('paddingLeft')?.disable();
    }

    if (this.bdrToggle === false) {
      this.btnForm.get('radius')?.enable();
      this.btnForm.get('radiusLTop')?.disable();
      this.btnForm.get('radiusRTop')?.disable();
      this.btnForm.get('radiusRBottom')?.disable();
      this.btnForm.get('radiusLBottom')?.disable();
    }

    this.changes = {
      'font-size': `${this.btnForm.get('fontSize')?.value}px`,
      'font-weight': `${this.btnForm.get('fontWeight')?.value}`,
      'line-height': `${this.btnForm.get('lineHeight')?.value}px`,
      'letter-spacing': `${this.btnForm.get('letterSpacing')?.value}px`,
      'text-align': this.txtAlign,
      width:
        this.btnForm.get('width')?.value === 'auto'
          ? 'auto'
          : `${this.btnForm.get('width')?.value}px`,
      height:
        this.btnForm.get('height')?.value === 'auto'
          ? 'auto'
          : `${this.btnForm.get('height')?.value}px`,
      padding:
        this.padToggle === true
          ? `${this.btnForm.get('paddingTop')?.value}px 
        ${this.btnForm.get('paddingRight')?.value}px 
        ${this.btnForm.get('paddingBottom')?.value}px 
        ${this.btnForm.get('paddingLeft')?.value}px`
          : `${this.btnForm.get('padding')?.value}px
        ${this.btnForm.get('padding')?.value}px
        ${this.btnForm.get('padding')?.value}px
        ${this.btnForm.get('padding')?.value}px`,
      'background-color': `${this.btnForm.get('backgroundColor')?.value}`,
      color: `${this.btnForm.get('textColor')?.value}`,
      'border-radius':
        this.bdrToggle === true
          ? `${this.btnForm.get('radiusLTop')?.value}px
        ${this.btnForm.get('radiusRTop')?.value}px
        ${this.btnForm.get('radiusRBottom')?.value}px
        ${this.btnForm.get('radiusLBottom')?.value}px`
          : `${this.btnForm.get('radius')?.value}px
        ${this.btnForm.get('radius')?.value}px
        ${this.btnForm.get('radius')?.value}px
        ${this.btnForm.get('radius')?.value}px`,
      'border-width': `${this.btnForm.get('borderWidth')?.value}px`,
      'border-style': `${this.btnForm.get('borderStyle')?.value}`,
      'border-color': `${this.btnForm.get('borderColor')?.value}`,
    };
  }

  selectComp(param: string) {
    this.selectCompProp = param;
  }

  respoScreen(param: string) {
    this.respoProp = param;

    if (this.respoProp === 'mobile') {
      this.respoWidth = '320px';
      this.respoHeight = '480px';
    }
    if (this.respoProp === 'tablet') {
      this.respoWidth = '640px';
      this.respoHeight = 'calc(100vh - 9.2rem)';
    }
    if (this.respoProp === 'desktop') {
      this.respoWidth = 'calc(100vw - 41.6rem)';
      this.respoHeight = '100%';
    }
  }

  showTools(param: string) {
    this.showToolsKey = [param];
  }

  zoomInFn() {
    if (this.zoom < 5) {
      this.zoom += 0.1;
      this.zoomIn = { transform: `scale(${this.zoom})` };
      this.updateZoomPercentage();
    }
  }

  zoomOutFn() {
    if (this.zoom > 0.1) {
      this.zoom -= 0.1;
      this.zoomIn = { transform: `scale(${this.zoom})` };
      this.updateZoomPercentage();
    }
  }

  updateZoomPercentage() {
    this.zoomPercentage = this.zoom * 100;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  toggleTheme(): void {
    const newTheme =
      this.componentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.themeService.setTheme(newTheme);
  }
}
