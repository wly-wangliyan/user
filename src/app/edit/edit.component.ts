import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';

class UserInfo {
  public name = '';
  public age = '';
  public sex = '';
  public tel = '';
  public address = '';
}

@Component({
  selector: 'app-edit',
  styleUrls: ['./edit.component.less'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  @ViewChild('age') public age: any;
  @ViewChild('ageTip') public ageTip: any;
  @ViewChild('tel') public tel: any;
  @ViewChild('telTip') public telTip: any;
  public ageStatus = false;
  public obj = new UserInfo();
  private essential: any = {
    name: '',
    age: '',
    sex: '',
    tel: '',
  };

  constructor(public userEdit: UserService) { }

  public ngOnInit(): void {
    this.getUserInfo();
    this.userEdit.isNull(this.obj);
  }

  public setUserInfo(): void {
    this.userEdit.setUser(this.obj);
  }

  public getUserInfo(): void {
    this.userEdit.getUser();
    this.obj = this.userEdit.obj;
  }

  // 校验手机号码格式
  public isTelephone(e: any, value: any): void {
    if (e.value) {
      if (!(/^1[34578]\d{9}$/.test(e.value))) {
        value.removeAttribute('hidden');
        this.obj.tel = e.value = '';
      } else {
        value.setAttribute('hidden', true);
      }
    }
  }

  // 校验年龄格式
  public isNumber(e: any, value: any): void {
    if (e.value) {
      this.ageStatus = isNaN(e.value);
      if (this.ageStatus === true) {
        this.obj.age = e.value = '';
        value.removeAttribute('hidden');
      } else {
        value.setAttribute('hidden', true);
      }
    }
  }

  // 保存时校验必填项
  public isAll(): any {
    this.isNumber(this.age.nativeElement, this.ageTip.nativeElement);
    this.isTelephone(this.tel.nativeElement, this.telTip.nativeElement);
    for (const key in this.essential) {
      if (key) {
        this.essential[key] = this.obj[key];
        if (!this.obj[key]) {
          alert('请将必填项填写完整');
          return;
        }
      }
    }
  }
}
