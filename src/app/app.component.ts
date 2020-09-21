import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('cancelbtn') tipModal: HTMLDivElement;

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute){
  }

  public ngAfterViewInit(): void{
    // console.log(this.tipModal);
    this.userService.tipDialog = this.tipModal;
  }
}
