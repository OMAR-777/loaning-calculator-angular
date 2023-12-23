import { Component, Input } from '@angular/core';
import { FinanceDetails } from '../_models/financeDetails';
import { FinanceType } from '../_models/enums';

@Component({
  selector: 'app-finance-details',
  templateUrl: './finance-details.component.html',
  styleUrls: ['./finance-details.component.css']
})
export class FinanceDetailsComponent {
  @Input() financeType: FinanceType = FinanceType.MortgageLoan;
  @Input() finance?: FinanceDetails;

  FinanceType = FinanceType;
}
