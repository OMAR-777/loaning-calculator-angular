import { Injectable } from '@angular/core';
import { FinanceDetails } from '../_models/financeDetails';
import { BenefitsDetails } from '../_models/benefitsDetails';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  calculateMortgage(salary: number, deductionRate: number, benefitsRate: number, years: number): FinanceDetails{
    let finance = {} as FinanceDetails;

    finance.monthlyInstallment = salary * (deductionRate/100);
    finance.mortgLoanDebt = finance.monthlyInstallment * 12 * years;
    finance.mortgLoan = (finance.mortgLoanDebt) / (1 + (benefitsRate/100)*years);
    finance.mortgLoanBenefits = finance.mortgLoanDebt - finance.mortgLoan;
    
    return finance;
  }

  calculateFlexMortgage(salary: number, totalDeductionRate: number, loanDeductionRate: number, mortgBenefitsRate: number, loanBenefitsRate: number, years: number): FinanceDetails{
    let finance = {} as FinanceDetails;

    finance.monthlyInstallment = salary * (totalDeductionRate/100);
    finance.mortgMonthlyInstallment = ((totalDeductionRate - loanDeductionRate)/100)*salary;
    finance.persMonthlyInstallment = (loanDeductionRate/100)*salary;


    finance.totalDebt = finance.monthlyInstallment * 12 * years;
    finance.mortgLoanDebt = finance.mortgMonthlyInstallment*12*5 + finance.monthlyInstallment * 12 * (years - 5);
    finance.persLoanDebt = finance.totalDebt - finance.mortgLoanDebt;

    finance.mortgLoan = (finance.mortgLoanDebt) / (1 + (mortgBenefitsRate/100)*years);
    finance.persLoan = (finance.totalDebt - finance.mortgLoanDebt)/(1 + (loanBenefitsRate/100) * 5);
    finance.totalLoan = finance.mortgLoan + finance.persLoan;

    finance.mortgLoanBenefits = finance.mortgLoanDebt - finance.mortgLoan;
    finance.persLoanBenefits = finance.persLoanDebt - finance.persLoan;
    finance.totalBenefits = finance.mortgLoanBenefits + finance.persLoanBenefits;

    return finance
  }

  calculateBenefits(loan: number, debt: number, years: number): BenefitsDetails{
    let benefits = {} as BenefitsDetails;

    benefits.rate = (debt - loan) / (years * loan);
    benefits.yearlyBenefits = benefits.rate * loan;
    benefits.totalBenefits = benefits.yearlyBenefits * 5;

    return benefits;
  }
}
