import {Component, OnInit, ViewChild, ElementRef, OnDestroy, EventEmitter, Injector} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../../../user.model';
import { UserService } from '../../../user.service';
import { validateHelper, ValidateHelper } from '../../../../utils/validate-helper';
import { Subscription } from 'rxjs';
import { createCustomElement } from '@angular/elements';
import { AlertService } from '../../../alert.service';
import { AlertComponent } from '../../../alert/alert.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit, OnDestroy {

  @ViewChild('cancelBtn') cancelBtn: ElementRef;


  public userInfo = new UserInfo();
  public sexArray = ['男', '女'];
  private subscription: Subscription;

  // tslint:disable-next-line: max-line-length
  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute, injector: Injector, public alert: AlertService) {
    const AlertElement = createCustomElement(AlertComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('alert-element', AlertElement);
  }

  public ngOnInit(): void {
    this.subscription = this.userService.cancelBtnClick.subscribe(() => {
      this.router.navigate(['/list'], { relativeTo: this.route });
    });
  }

  public ngOnDestroy(): void{
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

  // 存储个人信息
  public onSetEditFormSubmit(): void {
    if (this.checkParamsValid(this.userInfo)) {
      this.userService.saveUser(this.userInfo);
      this.router.navigate(['/list'], { relativeTo: this.route });
    }
  }

  // 点击取消按钮执行判断是否需要弹框确认提示
  public onCancelClick(value: boolean): void {
    if (value) {
      this.userService.cancelClick();
    } else {
      this.router.navigate(['/list'], { relativeTo: this.route });
    }
  }

  private checkParamsValid(obj: any): boolean {
    if (!ValidateHelper.IsTelephone(obj.tel)) {
      alert('请输入正确手机号');
      return false;
    }
    if (!validateHelper.isNumber(obj.age)) {
      alert('请输入正确年龄');
      return false;
    }
    return true;
  }
}
