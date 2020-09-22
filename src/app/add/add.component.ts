import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';
import { validateHelper, ValidateHelper } from '../utils/validate-helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  @ViewChild('cancelbtn') cancelbtn: ElementRef;

  public userInfo = new UserInfo();
  public sexArray = ['男', '女'];
  private subscription: Subscription;

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.subscription = this.userService.cancelBtnClick.subscribe(() => {
      this.router.navigate(['/list'], { relativeTo: this.route });
    });
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
