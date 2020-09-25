import { Component, ViewChild, AfterViewInit, OnInit, HostBinding } from '@angular/core';
import { UserService } from './user.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({display: 'block', transform: 'translateY(40%)'})),
      state('closed', style({display: 'none', transform: 'translateY(60%)'})),
      transition('open => closed', [
        animate('3s')
      ]),
      transition('closed => open', [
        animate('3s')
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('cancelBtn') tipModal: HTMLDivElement;
  public practiceStatus = this.userService.getUser() ? false : true;
  public isOpen = false;

  constructor(public userService: UserService){
  }



  public ngOnInit(): void {
    if (!this.userService.getUser()) {
      this.userService.out.subscribe(() => {
        this.practiceStatus = false;
      });
    }
    this.userService.out1.subscribe(() => {
    this.isOpen = this.userService.isOpen;
    });
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
