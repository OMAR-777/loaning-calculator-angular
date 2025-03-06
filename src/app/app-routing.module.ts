import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageComponent } from './mortgage/mortgage.component';
import { FlexMortgageComponent } from './flex-mortgage/flex-mortgage.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mortgage', component: MortgageComponent },
  { path: 'flexMortgage', component: FlexMortgageComponent },
  { path: 'benefits', component: BenefitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
