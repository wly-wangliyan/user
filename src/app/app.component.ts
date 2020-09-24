import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('cancelBtn') tipModal: HTMLDivElement;
  public practiceStatus = this.userService.getUser() ? false : true;

  constructor(public userService: UserService){
  }

  public ngOnInit(): void {
    if (!this.userService.getUser()) {
      this.userService.out.subscribe(() => {
        this.practiceStatus = false;
      });
    }
  }

  public ngAfterViewInit(): void{
    this.userService.tipDialog = this.tipModal;
  }

  // 点击导航菜单效果
  public onClickChooseMenu(e): void{
    const aItems: any = document.getElementsByClassName('choice');
    for (const item of aItems){
      if (item.id === e.target.id){
        item.style.color = '#40a9ff';
      }else{
        item.style.color = 'white';
      }
    }
  }
}
