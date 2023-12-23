import { Component } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  faCalculator = faCalculator;

  loan: number = 163747;
  debt: number = 194040;
  years: number = 5;

  benefitsRate?: number;
  calcYearlyBenefits?: number;
  calcTotalBenefits?: number;

  calculate(){
    this.benefitsRate = (this.debt - this.loan) / (this.years * this.loan);
    this.calcYearlyBenefits = this.benefitsRate * this.loan;
    this.calcTotalBenefits = this.calcYearlyBenefits * 5;
  }
}
