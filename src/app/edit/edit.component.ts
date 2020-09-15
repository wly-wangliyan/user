import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../user.model';


@Component({
  selector: 'app-edit',
  styleUrls: ['./edit.component.less'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {

  public ageStatus = undefined;
  public telStatus = undefined;
  public obj = new UserInfo();
  public sexs = ['男', '女'];

  constructor(public userEdit: UserService) { }

  public ngOnInit(): void {
    this.getUserInfo();
    this.userEdit.isNull(this.obj);
  }

  public onSetEditFormSubmit(): void {
    this.ageStatus = this.isNumber(this.obj.age);
    console.log(this.obj);
    if (!this.ageStatus) {
      alert('请输入正确年龄');
      return;
    }
    this.telStatus = this.isTelephone(this.obj.tel);
    if (!this.telStatus) {
      alert('请输入正确手机号码');
      return;
    }
    console.log(this.obj);
    this.userEdit.setUser(this.obj);
  }

  private getUserInfo(): void {
    this.userEdit.getUser();
    this.obj = this.userEdit.obj;
  }


  // 校验年龄格式
  private isNumber(value: any): boolean {
      // this.ageStatus = ;
      if (isNaN(value) === true) {
        this.obj.age = '';
        return false;
      } else {
        return true;
      }
  }

// 检验手机号码
  private isTelephone(tel: string): boolean {
    if (!(/^1[34578]\d{9}$/.test(tel))) {
      this.obj.tel = '';
      return false;
    }else{return true; }
  }

}

  // // 保存时校验必填项
  // public onSetUserInfoBtnClik(): any {
  //   this.isNumber(this.age.nativeElement, this.ageTip.nativeElement);
  //   this.isTelephone(this.tel.nativeElement, this.telTip.nativeElement);
  //   for (const key in this.essential) {
  //     if (key) {
  //       this.essential[key] = this.obj[key];
  //       if (!this.obj[key]) {
  //         alert('请将必填项填写完整');
  //         return;
  //       }
  //     }
  //   }
  // }

