import { Component } from '@angular/core';
import { Tabs } from '../../../../projects/css-fusion/src/lib/ts/index';
// import { Tabs } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  themeClr: string = '';
  tabContent: any = [
    {
      class: 'tab-body tab-body-01 active-content',
      tabTitle: 'Welcome to Tabs!',
      tabContent:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure.',
    },
    {
      class: 'tab-body tab-body-02 ',
      tabTitle: 'Company',
      tabContent:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure.',
    },
    {
      class: 'tab-body tab-body-03 ',
      tabTitle: 'Service',
      tabContent:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const tabContainers = document.querySelectorAll('.tab-view');

    tabContainers.forEach((container) => {
      new Tabs(container as HTMLElement);
    });
  }
}
