import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cssFusionTabs]',
})
export class TabsDirective {
  private scrollAmount: number = 200;
  private scrollLeftBtn?: HTMLElement;
  private scrollRightBtn?: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.initialize();
  }

  private initialize() {
    const container = this.el.nativeElement;
    const tabList = container.querySelectorAll('.tab-name');
    const tabContents = container.querySelectorAll('.tab-body');
    const tabListContainer = container.querySelector(
      '.tab-list'
    ) as HTMLElement;

    this.scrollLeftBtn = container.querySelector('.tab-left') as HTMLElement;
    this.scrollRightBtn = container.querySelector('.tab-right') as HTMLElement;

    this.checkScrollable(tabListContainer);

    window.addEventListener('resize', () =>
      this.checkScrollable(tabListContainer)
    );

    tabList.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        this.showTab(index, tabList, tabContents);
      });
    });

    this.scrollLeftBtn?.addEventListener('click', () =>
      this.scrollTabs(tabListContainer, 'left')
    );
    this.scrollRightBtn?.addEventListener('click', () =>
      this.scrollTabs(tabListContainer, 'right')
    );
  }

  private showTab(
    index: number,
    tabs: NodeListOf<Element>,
    contents: NodeListOf<Element>
  ) {
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    contents.forEach((content) => content.classList.remove('active-content'));

    tabs[index].classList.add('active-tab');
    contents[index].classList.add('active-content');
  }

  private scrollTabs(container: HTMLElement, direction: 'left' | 'right') {
    const scrollDistance =
      direction === 'left' ? -this.scrollAmount : this.scrollAmount;
    container.scrollBy({ left: scrollDistance, behavior: 'smooth' });

    setTimeout(() => this.checkScrollable(container), 300);
  }

  private checkScrollable(container: HTMLElement) {
    const isScrollable = container.scrollWidth > container.clientWidth;

    if (this.scrollLeftBtn && this.scrollRightBtn) {
      this.scrollLeftBtn.style.display = isScrollable ? 'block' : 'none';
      this.scrollRightBtn.style.display = isScrollable ? 'block' : 'none';
    }
  }
}
