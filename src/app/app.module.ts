import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FlexMortgageComponent } from './flex-mortgage/flex-mortgage.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FinanceDetailsComponent } from './finance-details/finance-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AdsenseModule } from 'ng2-adsense';

registerLocaleData(localeAr, 'ar');

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MortgageComponent,
    NavComponent,
    FlexMortgageComponent,
    BenefitsComponent,
    FinanceDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxSpinnerModule.forRoot(),
    // shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'ca-pub-8588747252057442',
      adSlot: 6614473835,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
