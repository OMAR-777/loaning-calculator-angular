import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private supportedLangs = ['en', 'ar'];
  private defaultLang = 'en';

  constructor(private translateService: TranslateService, private title: Title) {
    this.translateService.onLangChange.subscribe((event) => {
      this.setDirectionAndStyles(event.lang);
    });
  }

  initLang(): void {
    let lang = this.defaultLang;
    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      lang = savedLang;
    } else {
      const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
      if (this.supportedLangs.includes(browserLang)) {
        lang = browserLang;
      }
    }

    this.translateService.use(lang);
    this.setTitle();
  }

  switchLang(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }

  getCurrentLang(): string {
    return this.translateService.currentLang;
  }

  private setDirectionAndStyles(language: string) {
    const htmlTag = document.documentElement;
    if (language === 'ar') {
      htmlTag.setAttribute('dir', 'rtl');
      this.loadCSS('assets/bootstrap/bootstrap.rtl.min.css');
      this.unloadCSS('assets/bootstrap/bootstrap.min.css');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      this.loadCSS('assets/bootstrap/bootstrap.min.css');
      this.unloadCSS('assets/bootstrap/bootstrap.rtl.min.css');
    }
  }

  private loadCSS(href: string) {
    let linkElement = document.querySelector(`link[href="${href}"]`);
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('href', href);
      document.head.appendChild(linkElement);
    }
  }

  private unloadCSS(href: string) {
    const linkElement = document.querySelector(`link[href="${href}"]`);
    if (linkElement) {
      document.head.removeChild(linkElement);
    }
  }

  private setTitle(): void {
    this.translateService.get('PAGE_TITLE').subscribe((title: string) => {
      this.title.setTitle(title);
    });
  }
}
