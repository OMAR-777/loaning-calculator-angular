import { Component, Input, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faCalculator = faCalculator;
  @Input() lang!: string;

  constructor(private translateService: TranslateService){}

  changeLang(lang: any){
    const selectedLang = lang.target.value;
    localStorage.setItem("lang", selectedLang);
    lang = selectedLang;
    this.translateService.use(selectedLang);

  }
}
