export class Tabs {
  private scrollAmount: number = 200;
  private scrollLeftBtn?: HTMLElement;
  private scrollRightBtn?: HTMLElement;

  constructor(private container: HTMLElement) {
    this.initialize();
  }

  initialize() {
    const tabList = this.container.querySelectorAll('.tab-name');
    const tabContents = this.container.querySelectorAll('.tab-body');
    const tabListContainer = this.container.querySelector(
      '.tab-list'
    ) as HTMLElement;

    // Get the scroll buttons
    this.scrollLeftBtn = this.container.querySelector(
      '.tab-left'
    ) as HTMLElement;
    this.scrollRightBtn = this.container.querySelector(
      '.tab-right'
    ) as HTMLElement;

    // Check if scrolling is needed initially
    this.checkScrollable(tabListContainer);

    // Update visibility of arrows on resize
    window.addEventListener('resize', () =>
      this.checkScrollable(tabListContainer)
    );

    // Tab click functionality
    tabList.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        this.showTab(index, tabList, tabContents);
      });
    });

    // Scroll functionality
    this.scrollLeftBtn?.addEventListener('click', () =>
      this.scrollTabs(tabListContainer, 'left')
    );
    this.scrollRightBtn?.addEventListener('click', () =>
      this.scrollTabs(tabListContainer, 'right')
    );
  }

  showTab(
    index: number,
    tabs: NodeListOf<Element>,
    contents: NodeListOf<Element>
  ) {
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    contents.forEach((content) => content.classList.remove('active-content'));

    tabs[index].classList.add('active-tab');
    contents[index].classList.add('active-content');
  }

  scrollTabs(container: HTMLElement, direction: 'left' | 'right') {
    const scrollDistance =
      direction === 'left' ? -this.scrollAmount : this.scrollAmount;
    container.scrollBy({ left: scrollDistance, behavior: 'smooth' });

    // Update arrows visibility after scrolling
    setTimeout(() => this.checkScrollable(container), 300);
  }

  // Checks if scroll is needed and updates the visibility of scroll arrows
  private checkScrollable(container: HTMLElement) {
    const isScrollable = container.scrollWidth > container.clientWidth;

    // Update the visibility of scroll buttons
    if (this.scrollLeftBtn && this.scrollRightBtn) {
      this.scrollLeftBtn.style.display = isScrollable ? 'block' : 'none';
      this.scrollRightBtn.style.display = isScrollable ? 'block' : 'none';
    }
  }
}
