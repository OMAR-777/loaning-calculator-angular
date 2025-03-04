import { Component, Input, OnInit } from '@angular/core';
import { faCalculator, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../_svcs/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faCalculator = faCalculator;
  faSun = faSun;
  faMoon = faMoon;
  
  @Input() lang!: string;

  constructor(private translateService: TranslateService, private themeService: ThemeService){}

  changeLang(lang: any){
    const selectedLang = lang.target.value;
    localStorage.setItem("lang", selectedLang);
    lang = selectedLang;
    this.translateService.use(selectedLang);

  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }

  getCurrentTheme(){
    return this.themeService.getCurrentTheme();
  }
}
