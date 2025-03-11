import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) {}

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(0,0,0,0.7)',
      color: 'rgb(var(--bs-primary-rgb))',
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }

  fakeLoadingSpinner(callback: () => any, delay: number = 1000) {
    this.spinnerService.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(0,0,0,0.7)',
      color: 'rgb(var(--bs-primary-rgb))',
    });
    setTimeout(() => {
      callback();
      this.spinnerService.hide();
    }, delay);
  }
}
