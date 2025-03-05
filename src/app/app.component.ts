import { Component } from '@angular/core';
import { ThemeService } from './_svcs/theme.service';
import { TranslationService } from './_svcs/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translationService: TranslationService, themeService: ThemeService){
    this.translationService.initLang();
    themeService.loadTheme();
  }

}
