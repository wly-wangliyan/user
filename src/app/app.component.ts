import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('cancelbtn') tipModal: HTMLDivElement;

  constructor(public userService: UserService){
  }

  public ngAfterViewInit(): void{
    this.userService.tipDialog = this.tipModal;
  }
}
