import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(50px)'})),
      state('void,closed', style({transform: 'translateY(20px)', opacity: 1})),
      transition('* => *', animate('300ms ease-in')),
    ])
  ],
})
export class AlertComponent implements OnInit {

  public state: 'opened' | 'closed' = 'closed';

  @Output()
  closed = new EventEmitter();

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
    this.state = 'opened';
  }

  // 提示弹框点击确定
  public onSureClosedBtnClick(): void {
    this.closed.next();
    this.alertService.closeAlert();
  }
}
