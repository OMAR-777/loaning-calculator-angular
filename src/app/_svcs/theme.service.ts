import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {}

  toggleTheme(): void {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem(this.themeKey, newTheme);
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (!savedTheme) {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-bs-theme', preferredTheme);
    } else {
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
    }
  }

  getCurrentTheme(): string | null {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    return currentTheme;
  }
}
