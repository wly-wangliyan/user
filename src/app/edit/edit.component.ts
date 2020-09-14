import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { UserService } from '../user.service';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  @ViewChild('age') age: any;
  @ViewChild('ageTip') ageTip: any;
  @ViewChild('tel') tel: any;
  @ViewChild('telTip') telTip: any;
  public ageStatus = false;
  public obj: any = {
    name: '',
    age: '',
    sex: '',
    tel: '',
    address: ''
  };
  private essential: any = {
    name: '',
    age: '',
    sex: '',
    tel: '',
  };

  constructor(public userEdit: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.userEdit.isNull(this.obj);
  }

  setUserInfo(): void{
    this.userEdit.setUser(this.obj);
  }

  getUserInfo(): void{
    this.userEdit.getUser();
    this.obj = this.userEdit.obj;
  }

  // 校验手机号码格式
  isTelephone(e, value): void{
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
  isNumber(e, value): void{
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
  isAll(): any{
    this.isNumber(this.age.nativeElement, this.ageTip.nativeElement);
    this.isTelephone(this.tel.nativeElement, this.telTip.nativeElement);
    for (const key in this.essential) {
      if (key){
        this.essential[key] = this.obj[key];
        if (!this.obj[key]){
          alert('请将必填项填写完整');
          return;
        }
      }
    }
  }
}
