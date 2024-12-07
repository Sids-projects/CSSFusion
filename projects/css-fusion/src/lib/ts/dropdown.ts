export class Dropdown {
  constructor(private elements: NodeListOf<HTMLElement>) {
    this.initialize();
  }

  initialize() {
    this.elements.forEach((element) => {
      const menu = element.querySelector('.dd-menu') as HTMLElement;
      const list = element.querySelector('.dd-list') as HTMLElement;
      const options = element.querySelectorAll(
        '.dd-option'
      ) as NodeListOf<HTMLElement>;
      const ddName = element.querySelector('.dd-name') as HTMLElement;

      if (menu && list) {
        menu.addEventListener('click', (event) => {
          event.stopPropagation();
          this.toggleDropdown(list);
        });

        document.addEventListener('click', (event) => {
          if (!element.contains(event.target as Node)) {
            this.closeDropdown(list);
          }
        });

        options.forEach((option) => {
          option.addEventListener('click', () => {
            this.updateSelectedOption(ddName, option.textContent || '');
            this.closeDropdown(list);
          });
        });
      }
    });
  }

  toggleDropdown(list: HTMLElement) {
    if (list.classList.contains('dd-open')) {
      this.closeDropdown(list);
    } else {
      this.openDropdown(list);
    }
  }

  openDropdown(list: HTMLElement) {
    list.classList.remove('dd-closing');
    list.classList.add('dd-open');
  }

  closeDropdown(list: HTMLElement) {
    list.classList.remove('dd-open');
    list.classList.add('dd-closing');

    setTimeout(() => {
      list.classList.remove('dd-closing');
    }, 300);
  }

  updateSelectedOption(ddName: HTMLElement, selectedText: string) {
    ddName.textContent = selectedText;
  }
}
