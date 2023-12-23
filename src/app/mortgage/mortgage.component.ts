import { Component } from '@angular/core';
import { max } from 'rxjs';
import { FinanceDetails } from '../_models/financeDetails';
import { FinanceType } from '../_models/enums';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent {
  salary: number = 9800;
  deductionRate: number = 55;
  benefitsRate: number = 4.45;
  years: number = 25;

  finance?: FinanceDetails;
  FinanceType = FinanceType;

  calculate(){
    this.finance = {} as FinanceDetails;
    this.finance.monthlyInstallment = this.salary * (this.deductionRate/100);
    this.finance.mortgLoanDebt = this.finance.monthlyInstallment * 12 * this.years;
    this.finance.mortgLoan = (this.finance.mortgLoanDebt) / (1 + (this.benefitsRate/100)*this.years);
    this.finance.mortgLoanBenefits = this.finance.mortgLoanDebt - this.finance.mortgLoan;
  }

}
