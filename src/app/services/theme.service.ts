import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private themeSubject = new BehaviorSubject<string>(localStorage.getItem(this.THEME_KEY) || 'light-mode');
  currentTheme$ = this.themeSubject.asObservable();

  constructor() {
    const theme = this.themeSubject.value;
    document.body.classList.add(theme);
  }

  setTheme(theme: 'light-mode' | 'dark-mode') {
    const oldTheme = this.themeSubject.value;
    document.body.classList.remove(oldTheme);
    document.body.classList.add(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.themeSubject.next(theme);
  }

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.setTheme(newTheme);
  }

  get isDarkMode(): boolean {
    return this.themeSubject.value === 'dark-mode';
  }
}