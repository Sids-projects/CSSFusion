import { Injectable } from '@angular/core';
import { TemplateData } from '../interface/template-data';
import { ComponentData } from '../interface/component-data';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  templateData: TemplateData[] = [
    {
      icon: 'category',
      title: 'Templates',
      desc: 'Build seamless and visually appealing user interfaces with our Angular UI library. Designed for flexibility and scalability, our pre-built templates and components ensure a smooth development experience with optimized SCSS and CSS.',
      btn: 'View Template',
      routeTo: '',
    },
    {
      icon: 'school',
      title: 'NeonFlow',
      desc: 'A vibrant, modern UI with glowing elements and smooth animations, ideal for dashboards and creative applications.',
      btn: 'View Template',
      routeTo: 'NeonFlow_Tempate',
    },
    {
      icon: 'join_left',
      title: 'MinimalEdge',
      desc: 'A sleek, minimalistic design with sharp edges and subtle shadows, perfect for professional and business-oriented interfaces.',
      btn: 'View Template',
      routeTo: 'MinimalEdge_Tempate',
    },
    {
      icon: 'wand_stars',
      title: 'SoftAura',
      desc: 'A soft, rounded UI with pastel color palettes and gentle transitions, great for wellness, education, and lifestyle apps.',
      btn: 'View Template',
      routeTo: 'SoftAura_Tempate',
    },
    {
      icon: 'explore_nearby',
      title: 'DarkFusion',
      desc: 'A futuristic dark-themed UI with neon highlights and high-contrast components, suitable for gaming, fintech, and coding platforms.',
      btn: 'View Template',
      routeTo: 'DarkFusion_Tempate',
    },
    {
      icon: 'things_to_do',
      title: 'Ui ClassicPrime',
      desc: 'A timeless, elegant design with structured layouts and balanced typography, best for enterprise, legal, and corporate applications.',
      btn: 'View Template',
      routeTo: 'UiClassicPrime_Tempate',
    },
  ];

  componentsData: ComponentData[] = [
    {
      icon: 'category',
      title: 'Components',
      desc: 'Build seamless and visually appealing user interfaces with our Angular UI library. Designed for flexibility and scalability, our pre-built templates and components ensure a smooth development experience with optimized SCSS and CSS.',
      btn: 'View Components',
      routeTo: '',
    },
    {
      icon: 'view_timeline',
      title: 'Accordion',
      desc: 'A collapsible content panel that allows users to toggle between showing and hiding sections of related content. Useful for FAQs, menus, and structured information.',
      btn: 'Use Accordion',
      routeTo: 'Component_Accordion',
    },
    {
      icon: 'buttons_alt',
      title: 'Button',
      desc: 'A customizable button component with multiple styles, sizes, and states. Supports icons, hover effects, and different variants like primary, secondary, and outlined buttons.',
      btn: 'Use Button',
      routeTo: 'Component_Button',
    },
    {
      icon: 'dashboard',
      title: 'Card',
      desc: 'A flexible container component that displays content in an elegant, structured format. Ideal for showcasing information, images, and actions in a visually appealing way.',
      btn: 'Use Card',
      routeTo: 'Component_Card',
    },
    {
      icon: 'dropdown',
      title: 'Dropdown',
      desc: 'A dynamic dropdown menu that allows users to select an option from a list. Supports multi-level menus, icons, and advanced styling options.',
      btn: 'Use Dropdown',
      routeTo: 'Component_Dropdown',
    },
    {
      icon: 'draw',
      title: 'Input',
      desc: 'A fully customizable input field for text, numbers, passwords, and more. Supports validation, error states, and integration with Angular forms.',
      btn: 'Use Input',
      routeTo: 'Component_Input',
    },
    {
      icon: 'widgets',
      title: 'Menubar',
      desc: 'A horizontal or vertical navigation menu that organizes links, actions, and dropdowns in a structured layout. Great for top navigation bars and side menus.',
      btn: 'Use Menubar',
      routeTo: 'Component_Menubar',
    },
    {
      icon: 'side_navigation',
      title: 'Navigation',
      desc: 'A flexible navigation system supporting sidebars, breadcrumbs, and multi-level menus. Helps users navigate complex applications with ease.',
      btn: 'Use Navigation',
      routeTo: 'Component_Navigation',
    },
    {
      icon: 'table',
      title: 'Table',
      desc: 'A responsive table component that displays structured data efficiently. Supports sorting, filtering, pagination, and custom styling.',
      btn: 'Use Table',
      routeTo: 'Component_Table',
    },
    {
      icon: 'tab',
      title: 'Tab',
      desc: 'A tabbed interface component that allows users to switch between multiple views without navigating away. Ideal for organizing content within a single page.',
      btn: 'Use Tab',
      routeTo: 'Component_Tab',
    },
  ];

  tableSm: any = [
    { tr: ['1', 'Apple', 'Iphone 8', '10.08.2024', 'Battery Replacemeent'] },
  ];

  tableMd: any = [
    { tr: ['1', 'Apple', 'Iphone 8', '10.08.2024', 'Battery Replacemeent'] },
    { tr: ['2', 'Nokia', 'Nokia 10', '20.09.2024', 'Battery Replacemeent'] },
    {
      tr: ['3', 'Nothing', 'Nothing 2a', '05.10.2024', 'Battery Replacemeent'],
    },
    { tr: ['4', 'Oneplus', 'Oneplus 8', '08.09.2024', 'Battery Replacemeent'] },
    {
      tr: ['5', 'Redmi', 'Redmi 2 Prime', '10.08.2024', 'Battery Replacemeent'],
    },
    { tr: ['6', 'Pixel', 'Pixel 4a', '15.08.2024', 'Battery Replacemeent'] },
  ];

  tableLg: any = [
    {
      tr: [
        '1',
        '001',
        'Apple',
        'Iphone 8',
        '10.08.2024',
        'Screen replacement due to cracks',
      ],
    },
    {
      tr: [
        '2',
        '002',
        'Nokia',
        'Nokia 10',
        '20.09.2024',
        'Software update for new features',
      ],
    },
    {
      tr: [
        '3',
        '003',
        'Nothing',
        'Nothing 2a',
        '05.10.2024',
        'Camera lens replacement',
      ],
    },
    {
      tr: [
        '4',
        '004',
        'Oneplus',
        'Oneplus 8',
        '08.09.2024',
        'Speaker malfunction repair',
      ],
    },
    {
      tr: [
        '5',
        '005',
        'Redmi',
        'Redmi 2 Prime',
        '10.08.2024',
        'Charging port replacement',
      ],
    },
    {
      tr: [
        '6',
        '006',
        'Pixel',
        'Pixel 4a',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '7',
        '006',
        'Pixel',
        'Nokia 8a',
        '15.08.2024',
        'Charging port replacement',
      ],
    },
    {
      tr: [
        '8',
        '006',
        'Pixel',
        'Redmi 4',
        '15.08.2024',
        'Camera lens replacement',
      ],
    },
    {
      tr: [
        '9',
        '006',
        'Pixel',
        'Pixel 9 Pro',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '10',
        '006',
        'Pixel',
        'Onplus 8',
        '15.08.2024',
        'Speaker malfunction repair',
      ],
    },
    {
      tr: [
        '11',
        '006',
        'Pixel',
        'Oppo Reno',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '12',
        '006',
        'Pixel',
        'Samsung s23',
        '15.08.2024',
        'Camera lens replacement',
      ],
    },
    {
      tr: [
        '13',
        '006',
        'Pixel',
        'Backberry One',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '14',
        '006',
        'Pixel',
        'Samsung A19',
        '15.08.2024',
        'Speaker malfunction repair',
      ],
    },
    {
      tr: [
        '15',
        '006',
        'Pixel',
        'Oneplus 12',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
  ];

  tableMini: any = [
    { tr: ['1', 'Apple', 'Iphone 8'] },
    { tr: ['2', 'Nokia', 'Nokia 10'] },
    {
      tr: ['3', 'Nothing', 'Nothing 2a'],
    },
    { tr: ['4', 'Oneplus', 'Oneplus 8'] },
    {
      tr: ['5', 'Redmi', 'Redmi 2 Prime'],
    },
    { tr: ['6', 'Pixel', 'Pixel 4a'] },
  ];

  constructor() {}
}
