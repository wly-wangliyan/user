import {EventEmitter, Injectable, Injector, Output} from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public state: any;
  public cancelBroadcast: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public showAsElement(): void {
    const alertEl: NgElement & WithProperties<AlertComponent> = document.createElement('alert-element') as any;
    alertEl.addEventListener('closed', () => document.body.removeChild(alertEl));
    document.body.appendChild(alertEl);
  }

  // // 提示弹框点击确定
  // public onSureClosedBtnClick(): void {
  //   // this.closed.next();
  //   // this.alertService.closeAlert();
  //   this.cancelBroadcast.next();
  // }

  public closeAlert(): void {
    this.cancelBroadcast.emit();
  }
}
