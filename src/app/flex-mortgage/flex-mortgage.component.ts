import { Component } from '@angular/core';
import { FinanceDetails } from '../_models/financeDetails';
import { isEmptyObject } from '../_utils/helpers';
import { FinanceType } from '../_models/enums';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { BusyService } from '../_svcs/busy.service';
import { CalculationService } from '../_svcs/calculation.service';

@Component({
  selector: 'app-flex-mortgage',
  templateUrl: './flex-mortgage.component.html',
  styleUrls: ['./flex-mortgage.component.css'],
})
export class FlexMortgageComponent {
  constructor(
    private calcService: CalculationService,
    private busyService: BusyService
  ) {}

  faCalculator = faCalculator;

  salary: number = 9800;
  totalDeductionRate: number = 55;
  loanDeductionRate: number = 33;
  mortgBenefitsRate: number = 4.45;
  loanBenefitsRate: number = 3.70;
  years: number = 25;

  finance?: FinanceDetails;
  FinanceType = FinanceType;

  calculate() {
    this.busyService.fakeLoadingSpinner(() => {
      this.finance = this.calcService.calculateFlexMortgage(
        this.salary,
        this.totalDeductionRate,
        this.loanDeductionRate,
        this.mortgBenefitsRate,
        this.loanBenefitsRate,
        this.years
      );
    });
  }
}
