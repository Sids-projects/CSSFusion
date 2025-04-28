import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cssFusionNav]',
})
export class NavDirective implements AfterViewInit {
  private isResized = false;
  private mediaQuery: MediaQueryList;

  constructor(private el: ElementRef<HTMLElement>) {
    this.mediaQuery = window.matchMedia('(max-width: 950px)');
  }

  ngAfterViewInit() {
    this.loadState();
    this.initialize();
    this.handleResize();
  }

  initialize() {
    const container = this.el.nativeElement;
    const navLeftTrigger = container.querySelector('#navLeft-tigger');

    if (navLeftTrigger) {
      navLeftTrigger.addEventListener('click', () => this.toggleResize());
    } else {
      console.warn('Element #navLeft-tigger not found in Nav component.');
    }

    if (this.mediaQuery.addEventListener) {
      this.mediaQuery.addEventListener('change', () => this.handleResize());
    } else {
      this.mediaQuery.onchange = () => this.handleResize();
    }

    container.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'width' && !this.isResized) {
        this.toggleNavTextVisibility(false);
      }
    });
  }

  toggleResize() {
    this.isResized = !this.isResized;
    this.updateResizeClass();
    this.toggleNavTextVisibility(true);
    this.toggleIconText();
    this.saveState();
  }

  toggleIconText() {
    const container = this.el.nativeElement;
    const navLeftTrigger = container.querySelector('#navLeft-tigger');
    if (navLeftTrigger) {
      if (this.isResized) {
        navLeftTrigger.textContent = 'keyboard_double_arrow_right';
      } else {
        navLeftTrigger.textContent = 'keyboard_double_arrow_left';
      }
    }
  }

  handleResize() {
    if (!localStorage.getItem('navResized')) {
      this.isResized = this.mediaQuery.matches;
      this.updateResizeClass();
      this.toggleNavTextVisibility(true);
      this.toggleIconText();
    }
  }

  updateResizeClass() {
    const container = this.el.nativeElement;
    if (this.isResized) {
      container.classList.add('navleft-resize');
    } else {
      container.classList.remove('navleft-resize');
    }
  }

  toggleNavTextVisibility(hide: boolean) {
    const container = this.el.nativeElement;
    const navTextElements = container.querySelectorAll('.nav-txt');
    navTextElements.forEach((element) => {
      if (hide) {
        element.classList.add('d-none');
      } else {
        element.classList.remove('d-none');
      }
    });
  }

  saveState() {
    localStorage.setItem('navResized', this.isResized.toString());
  }

  loadState() {
    const container = this.el.nativeElement;
    const savedState = localStorage.getItem('navResized');
    if (savedState !== null) {
      this.isResized = savedState === 'true';
      this.updateResizeClass();
      this.toggleNavTextVisibility(this.isResized);
      this.toggleIconText();
    }
  }
}
