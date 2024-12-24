import { Component, OnInit } from '@angular/core';
import { Accordion } from './../../../../../projects/css-fusion/src/lib/ts/index';
// import { Accordion } from '@dev.spot/css-fusion';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  themeClr: string = '';
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
      class: 'accordion-yellow',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'accordion-green',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'accordion-orange',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'accordion-blue',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'accordion-violet',
      title: 'Introduction',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
    {
      class: 'accordion-gray',
      title: 'Terms and Conditions',
      content:
        'Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content.',
    },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.themeClr = theme;
    });
  }

  ngAfterViewInit() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    new Accordion(accordionElements as NodeListOf<HTMLElement>);
  }
}
