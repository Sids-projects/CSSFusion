export class Accordion {
  constructor(private elements: NodeListOf<HTMLElement>) {
    this.initialize();
  }

  initialize() {
    this.elements.forEach((element) => {
      const body = element.querySelector('.acc-body') as HTMLElement;
      const stateArrow = element.querySelector('.state-arrow') as HTMLElement;

      if (body && body.classList.contains('acc-open')) {
        this.openAccordion(element, body, stateArrow);
      }

      const header = element.querySelector('.acc-head');
      if (header) {
        header.addEventListener('click', (event: Event) =>
          this.toggleAccordion(event, element)
        );
      }
    });
  }

  toggleAccordion(event: Event, clickedElement: HTMLElement) {
    const body = clickedElement.querySelector('.acc-body') as HTMLElement;
    const stateArrow = clickedElement.querySelector(
      '.state-arrow'
    ) as HTMLElement;

    if (body) {
      const isOpen = body.classList.toggle('open');
      stateArrow.classList.toggle('open');

      if (isOpen) {
        this.openAccordion(clickedElement, body, stateArrow);
      } else {
        this.closeAccordion(body, stateArrow);
      }

      if (!clickedElement.querySelector('.acc-head-static')) {
        const group = clickedElement.closest('.accordion-grup') as HTMLElement;
        this.closeOtherAccordions(group, clickedElement);
      }
    }
  }

  openAccordion(
    element: HTMLElement,
    body: HTMLElement,
    stateArrow: HTMLElement
  ) {
    const contentHeight = body.scrollHeight;
    body.style.height = `${contentHeight}px`;
    body.classList.add('open');
    stateArrow.classList.add('open');
  }

  closeAccordion(body: HTMLElement, stateArrow: HTMLElement) {
    body.classList.remove('open');
    stateArrow.classList.remove('open');
    body.style.height = '0';

    setTimeout(() => {
      body.style.height = '';
    }, 500);
  }

  closeOtherAccordions(group: HTMLElement, openElement: HTMLElement) {
    const otherAccordions = group.querySelectorAll('.accordion-main');
    otherAccordions.forEach((element) => {
      if (element !== openElement) {
        const body = element.querySelector('.acc-body') as HTMLElement;
        const stateArrow = element.querySelector('.state-arrow') as HTMLElement;

        if (body.classList.contains('open')) {
          this.closeAccordion(body, stateArrow);
        }
      }
    });
  }
}
