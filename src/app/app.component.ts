import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CSSFusion';

  constructor(
    private sanitizer: DomSanitizer,
    public themeService: ThemeService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const body = document.getElementById('app-body');
    const header = document.getElementById('app-header');

    if (body && header) {
      body.addEventListener('scroll', () => {
        if (body.scrollTop > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
