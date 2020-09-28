import {EventEmitter, Injectable} from '@angular/core';
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

  public closeAlert(): void {
    this.cancelBroadcast.emit();
  }
}
