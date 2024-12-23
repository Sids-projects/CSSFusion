import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'light-mode'
  );
  currentTheme = this.theme.asObservable();

  setTheme(theme: string): void {
    this.theme.next(theme);
    localStorage.setItem('theme', theme);
  }
}
