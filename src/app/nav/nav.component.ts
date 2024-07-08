import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faCalculator = faCalculator;
  lang='';

  constructor(private translateService: TranslateService){}

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "ar";
  }

  changeLang(lang: any){
    const selectedLang = lang.target.value;
    localStorage.setItem("lang", selectedLang);
    lang = selectedLang;
    this.translateService.use(selectedLang);

  }
}
