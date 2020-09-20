import { Component } from '@angular/core';
// import { ConfirmationBoxComponent } from './share/confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  public tabChoose(num: number): void{
    let i;
    for (i = 1; i <= 2; i++) {
      if (i === num) {
        document.getElementById('L' + i).style.backgroundColor = '#a3b17e';
      } else {
        document.getElementById('L' + i).style.backgroundColor = '#e5e9f0';
      }
    }
  }

}
