import {Component, ViewChild, AfterViewInit, OnInit, Injector} from '@angular/core';
import { UserService } from './user.service';
import {createCustomElement} from '@angular/elements';
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

  @ViewChild('cancelBtn') tipModal: HTMLDivElement;
  @ViewChild('secondMenu') secondMenu: any;
  public practiceStatus = this.userService.getUser() ? false : true;
  public secondStatus = true;

  constructor(public userService: UserService, injector: Injector){
    const AlertElement = createCustomElement(AlertComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('alert-element', AlertElement);
  }

  public ngOnInit(): void {
    if (!this.userService.getUser()) {
      this.userService.saveBroadcast.subscribe(() => {
        this.practiceStatus = false;
      });
    }
  }

  // public ngAfterViewInit(): void{
  //   this.userService.tipDialog = this.tipModal;
  // }

  // 点击导航菜单效果
  public onClickChooseMenu(e): void{
    const aItems: any = document.getElementsByClassName('choice');
    for (const item of aItems){
      if (item.id === e.target.id){
        item.style.color = '#40a9ff';
        if (e.target.id === 'L3' ){
          this.secondStatus = !this.secondStatus;
          this.secondMenu.nativeElement.style.display = this.secondStatus === true ? 'none' : 'block' ;
        }
      }else{
        item.style.color = 'white';
      }
    }
  }
}
