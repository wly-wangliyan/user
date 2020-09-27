import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfo } from '../../../user.model';
import { UserService } from '../../../user.service';
import { validateHelper, ValidateHelper } from '../../../../utils/validate-helper';
import { AlertService } from '../../../alert/alert.service';

@Component({
  selector: 'app-edit',
  styleUrls: ['./edit.component.less'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit, OnDestroy{

  public userInfo = new UserInfo();
  public sexArray = ['男', '女'];
  private subscription: Subscription;
  private fromPath: 'list' | 'details' = 'list';

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute, public alertService: AlertService) {
    this.route.queryParamMap.subscribe(map => {
      this.fromPath = map.get('from') === 'details' ? 'details' : 'list';
    });
    console.log(this.fromPath);
  }

  public ngOnInit(): void {
    if (!!this.userService.getUser()) {
      this.userInfo = this.userService.getUser();
    }
    this.subscription = this.alertService.cancelBroadcast.subscribe(() => {
      this.navigated();
    });
  }

  public ngOnDestroy(): void{
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

  // 提交存储个人信息
  public onSetEditFormSubmit(): void {
    if (this.checkParamsValid(this.userInfo)) {
      this.userService.saveUser(this.userInfo);
      this.navigated();
    }
  }

  // 点击取消按钮执行判断是否需要弹框确认提示
  public onCancelClick(value: boolean): void {
    if (value) {
      // this.userService.cancelClick();
      this.alertService.showAsElement();
    } else {
      this.navigated();
    }
  }

  // 根据上一页面路由信息判断跳转
  private navigated(): void{
    if (this.fromPath === 'details') {
      this.router.navigate(['/details'], { relativeTo: this.route });
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
