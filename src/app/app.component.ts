import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultLangCode: string = "en";
  langCode: string;

  constructor(private translateService: TranslateService){
    this.langCode = localStorage.getItem("lang") ?? this.defaultLangCode;

    this.translateService.setDefaultLang(this.defaultLangCode);
    this.translateService.use(this.langCode || this.defaultLangCode);

    this.translateService.onLangChange.subscribe((event) => {
      this.setDirectionAndStyles(event.lang);
    });
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

}
