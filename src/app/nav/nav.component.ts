import { Component } from '@angular/core';
import { faCalculator, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../_svcs/theme.service';
import { TranslationService } from '../_svcs/translation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faCalculator = faCalculator;
  faSun = faSun;
  faMoon = faMoon;
  
  constructor(private translationService : TranslationService, private themeService: ThemeService){
  }

  changeLang(lang: any){
    const selectedLang = lang.target.value;
    this.translationService.switchLang(selectedLang);
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }

  getCurrentLang(){
    return this.translationService.getCurrentLang();
  }

  getCurrentTheme(){
    return this.themeService.getCurrentTheme();
  }
}
