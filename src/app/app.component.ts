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

  // 点击导航菜单效果
  public onClickChooseMenu(e): void{
    const aItems: any = document.getElementsByTagName('a');
    for (const item of aItems){
      if (item.id === e.target.id){
        item.style.color = '#40a9ff';
      }else{
        item.style.color = 'white';
      }
    }
  }
}
