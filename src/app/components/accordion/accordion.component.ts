import { Component, OnInit } from '@angular/core';
// import { Accordion } from '../../../../projects/css-fusion/src/lib/ts/index';
// import { Accordion } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  themeClr: string = '';
  selectedClr: string = 'green';
  accContent: { class: string; title: string; content: string }[] = [
    {
      class: '',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: '',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
  ];
  accContentXl: { class: string; title: string; content: string }[] = [
    {
      class: 'yellow',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'green',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'orange',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'blue',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'violet',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'gray',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.accordion();
  }

  accordion() {
    // const accordionElements = document.querySelectorAll('.accordion-main');
    // new Accordion(accordionElements as NodeListOf<HTMLElement>);
  }

  selectClr(param: string) {
    this.selectedClr = param;
  }
}
