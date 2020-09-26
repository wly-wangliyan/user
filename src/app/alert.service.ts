import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private injector: Injector) { }

  public showAsElement(): void {
    // Create element
    const alertEl: NgElement & WithProperties<AlertComponent> = document.createElement('alert-element') as any;

    // Listen to the close event
    alertEl.addEventListener('closed', () => document.body.removeChild(alertEl));


    // Add to the DOM
    document.body.appendChild(alertEl);
  }
}
