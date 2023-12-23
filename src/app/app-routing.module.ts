import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageComponent } from './mortgage/mortgage.component';
import { FlexMortgageComponent } from './flex-mortgage/flex-mortgage.component';

const routes: Routes = [
  { path: '', component: MortgageComponent },
  { path: 'flexMortgage', component: FlexMortgageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
