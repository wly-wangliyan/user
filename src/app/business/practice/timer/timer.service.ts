import {Injectable} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public timeSeconds = 0;
  public subscription: Subscription;
  public status = '开始';
  public b = 0;

  constructor() {
  }

  public timerStart(): string {
    const secondsCounter = interval(10);
    switch (this.status) {
      case '开始':
        this.subscription = secondsCounter.subscribe(n => {
            // console.log(n);
            this.timeSeconds = n + 1;
            this.status = '暂停';
          }
        );
        break;
      case '暂停':
        this.b = this.timeSeconds;
        this.subscription.unsubscribe();
        this.status = '继续';
        break;
      case '继续':
        this.subscription = secondsCounter.subscribe(n => {
            // console.log(n);
            this.timeSeconds = this.b + n + 1;
            this.status = '暂停';
          }
        );
    }
    return this.status;
  }

  public timerEnd(): string {
    this.subscription.unsubscribe();
    this.timeSeconds = 0;
    this.b = 0;
    this.status = '开始';
    return this.status;
  }
}
