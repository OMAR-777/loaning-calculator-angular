import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FlexMortgageComponent } from './flex-mortgage/flex-mortgage.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FinanceDetailsComponent } from './finance-details/finance-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgageComponent,
    NavComponent,
    FlexMortgageComponent,
    BenefitsComponent,
    FinanceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
