import {Component, ViewChild, OnInit, Injector} from '@angular/core';
import { UserService } from './user.service';
import {createCustomElement} from '@angular/elements';
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

  @ViewChild('secondMenu') secondMenu: any;
  public practiceStatus = this.userService.getUser() ? false : true;
  private secondStatus = true; // 二级菜单栏状态

  constructor(public userService: UserService, injector: Injector){
    const AlertElement = createCustomElement(AlertComponent, {injector});
    // 注册自定义元素
    customElements.define('alert-element', AlertElement);
  }

  public ngOnInit(): void {
    if (!this.userService.getUser()) {
      this.userService.saveBroadcast.subscribe(() => {
        this.practiceStatus = false;
      });
    }
    // 监听练习模块页面点击导航栏，左侧导航栏显示
    this.userService.practiceModalStatus.subscribe(() => {
      this.secondStatus = false;
      this.secondMenu.nativeElement.style.display = 'block';
    });
  }

  // 点击导航菜单效果
  public onClickChooseMenu(e): void{
    const aItems: any = document.getElementsByClassName('choice');
    for (const item of aItems){
      if (item.id === e.target.id){
        item.style.color = '#40a9ff';
        if (e.target.id === 'L3' ){
          this.secondStatus = !this.secondStatus;
          this.secondMenu.nativeElement.style.display = this.secondStatus === true ? 'none' : 'block' ;
        }else{
          this.secondStatus = true;
          this.secondMenu.nativeElement.style.display = 'none';
        }
      }else{
        item.style.color = 'white';
      }
    }
  }
}
