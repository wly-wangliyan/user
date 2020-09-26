import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
  // host: {'[@state]': 'state'},
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(100px)'})),
      state('void, closed', style({transform: 'translateY(100px)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
})
export class AlertComponent implements OnInit {

  public state: 'opened' | 'closed' = 'closed';

  constructor() { }


  ngOnInit(): void {
  }

}
