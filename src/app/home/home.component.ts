import { animate, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faArrowRight, faChartLine, faExchangeAlt, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        sequence([
          query('.welcome-div, .card', [
            style({ opacity: 0})
          ]),
          query('.welcome-div', [
            style({ transform: 'translateY(-50px)', opacity: 0 }),
            animate('700ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
          ]),
          query('.card', [
            stagger(500, [
              animate('500ms ease-out', style({ opacity: 1 }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent {
  faArrowRight = faArrowRight;
  faHouse = faHouse;
  faExchangeAlt = faExchangeAlt;
  faChartLine = faChartLine;

}
