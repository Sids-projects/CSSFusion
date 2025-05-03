import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
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
