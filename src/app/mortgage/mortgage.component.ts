import { Component } from '@angular/core';
import { max } from 'rxjs';
import { FinanceDetails } from '../_models/financeDetails';
import { FinanceType } from '../_models/enums';

import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { BusyService } from '../_svcs/busy.service';
import { CalculationService } from '../_svcs/calculation.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css'],
})
export class MortgageComponent {
  constructor(
    private calcService: CalculationService,
    private busyService: BusyService
  ) {}

  faCalculator = faCalculator;

  salary: number = 9800;
  deductionRate: number = 55;
  benefitsRate: number = 4.45;
  years: number = 25;

  finance?: FinanceDetails;
  FinanceType = FinanceType;

  calculate() {
    this.busyService.fakeLoadingSpinner(() => {
      this.finance = this.calcService.calculateMortgage(
        this.salary,
        this.deductionRate,
        this.benefitsRate,
        this.years
      );
    });
  }
}
