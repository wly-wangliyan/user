import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimerService} from './timer.service';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit, OnDestroy {
  public disableStatus: boolean = this.timerService.status === '开始' ? true : false;
  public date = new Date();
  public newDate = new Date().toLocaleString();
  private subscription: Subscription;

  constructor(public timerService: TimerService) {
  }

  public ngOnInit(): void {
    const timeCounter = interval(1000);
    this.subscription = timeCounter.subscribe((n) => {
      document.getElementById('time1').innerHTML = new Date().toLocaleString();
    });
  }

  public timerStart(): void {
    const a = this.timerService.timerStart();
    if (a === '暂停' || '继续') {
      this.disableStatus = false;
    }
  }

  public timerEnd(): void {
    const a = this.timerService.timerEnd();
    if (a) {
      this.disableStatus = true;
    }
  }

  public ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

}
