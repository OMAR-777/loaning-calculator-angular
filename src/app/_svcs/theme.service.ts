import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', preferredTheme);
  }
}
