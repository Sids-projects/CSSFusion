import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CSSFusion';
  isDarkMode = false;
  newTheme!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    this.isDarkMode = savedTheme === 'dark-mode';
    document.body.classList.add(savedTheme);
  }

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

  private theme = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'dark-mode'
  );
  currentTheme = this.theme.asObservable();

  setTheme(theme: string): void {
    const oldTheme = this.isDarkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.remove(oldTheme);
    document.body.classList.add(theme);
    this.isDarkMode = theme === 'dark-mode';

    this.theme.next(theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.newTheme = this.isDarkMode ? 'light-mode' : 'dark-mode';
    this.setTheme(this.newTheme);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
