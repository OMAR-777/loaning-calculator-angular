import { Component } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { BusyService } from '../_svcs/busy.service';
import { BenefitsDetails } from '../_models/benefitsDetails';
import { CalculationService } from '../_svcs/calculation.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  constructor(private calcService: CalculationService, private busyService: BusyService){}
  faCalculator = faCalculator;

  loan: number = 163747;
  debt: number = 194040;
  years: number = 5;

  benefits?: BenefitsDetails;

  calculate(){
    this.busyService.fakeLoadingSpinner(() => {
      this.benefits = this.calcService.calculateBenefits(this.loan, this.debt, this.years);
    });
  }
}
