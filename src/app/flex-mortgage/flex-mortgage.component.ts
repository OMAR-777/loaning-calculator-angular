import { Component } from '@angular/core';
import { FinanceDetails } from '../_models/financeDetails';
import { isEmptyObject } from '../_utils/helpers';
import { FinanceType } from '../_models/enums';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flex-mortgage',
  templateUrl: './flex-mortgage.component.html',
  styleUrls: ['./flex-mortgage.component.css']
})
export class FlexMortgageComponent {
  faCalculator = faCalculator;

  salary: number = 9800;
  totalDeductionRate: number = 55;
  loanDeductionRate: number = 33;
  mortgBenefitsRate: number = 4.45;
  loanBenefitsRate: number = 3.70;
  years: number = 25;

  finance?: FinanceDetails;
  FinanceType = FinanceType;

  calculate(){
    this.finance = {} as FinanceDetails;

    this.finance.monthlyInstallment = this.salary * (this.totalDeductionRate/100);
    this.finance.mortgMonthlyInstallment = ((this.totalDeductionRate - this.loanDeductionRate)/100)*this.salary;
    this.finance.persMonthlyInstallment = (this.loanDeductionRate/100)*this.salary;


    this.finance.totalDebt = this.finance.monthlyInstallment * 12 * this.years;
    this.finance.mortgLoanDebt = this.finance.mortgMonthlyInstallment*12*5 + this.finance.monthlyInstallment * 12 * (this.years - 5);
    this.finance.persLoanDebt = this.finance.totalDebt - this.finance.mortgLoanDebt;

    this.finance.mortgLoan = (this.finance.mortgLoanDebt) / (1 + (this.mortgBenefitsRate/100)*this.years);
    this.finance.persLoan = (this.finance.totalDebt - this.finance.mortgLoanDebt)/(1 + (this.loanBenefitsRate/100) * 5);
    this.finance.totalLoan = this.finance.mortgLoan + this.finance.persLoan;

    this.finance.mortgLoanBenefits = this.finance.mortgLoanDebt - this.finance.mortgLoan;
    this.finance.persLoanBenefits = this.finance.persLoanDebt - this.finance.persLoan;
    this.finance.totalBenefits = this.finance.mortgLoanBenefits + this.finance.persLoanBenefits;
  }

}
