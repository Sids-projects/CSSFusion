export class Nav {
  private isResized = false;
  private mediaQuery: MediaQueryList;

  constructor(private container: HTMLElement) {
    this.mediaQuery = window.matchMedia('(max-width: 950px)');
    this.loadState();
    this.initialize();
    this.handleResize();
  }

  initialize() {
    const navLeftTrigger = this.container.querySelector('#navLeft-tigger');

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

    // Listen for the end of the width transition
    this.container.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'width' && !this.isResized) {
        this.toggleNavTextVisibility(false); // Show text after transition ends
      }
    });
  }

  toggleResize() {
    this.isResized = !this.isResized;
    this.updateResizeClass();
    this.toggleNavTextVisibility(true); // Hide text immediately
    this.toggleIconText();
    this.saveState();
  }

  toggleIconText() {
    const navLeftTrigger = this.container.querySelector('#navLeft-tigger');
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
      this.toggleNavTextVisibility(true); // Hide text if resized
      this.toggleIconText();
    }
  }

  updateResizeClass() {
    if (this.isResized) {
      this.container.classList.add('navleft-resize');
    } else {
      this.container.classList.remove('navleft-resize');
    }
  }

  toggleNavTextVisibility(hide: boolean) {
    const navTextElements = this.container.querySelectorAll('.nav-txt');
    navTextElements.forEach((element) => {
      if (hide) {
        element.classList.add('d-none'); // Hide text
      } else {
        element.classList.remove('d-none'); // Show text after transition ends
      }
    });
  }

  saveState() {
    localStorage.setItem('navResized', this.isResized.toString());
  }

  loadState() {
    const savedState = localStorage.getItem('navResized');
    if (savedState !== null) {
      this.isResized = savedState === 'true';
      this.updateResizeClass();
      this.toggleNavTextVisibility(this.isResized); // Adjust text visibility based on state
      this.toggleIconText();
    }
  }
}
