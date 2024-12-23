import { Component, OnInit } from '@angular/core';
import { Accordion } from './../../../../../projects/css-fusion/src/lib/ts/index';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  themeClr: string = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.themeClr = theme;
      console.log(this.themeClr);
    });
  }

  ngAfterViewInit() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    new Accordion(accordionElements as NodeListOf<HTMLElement>);
  }
}
