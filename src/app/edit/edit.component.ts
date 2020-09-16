import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfo} from '../user.model';
import {Router, ActivatedRoute} from '@angular/router';
import {ValidateHelper} from '../utils/validate-helper';

@Component({
  selector: 'app-edit',
  styleUrls: ['./edit.component.less'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {

  public ageStatus = undefined;
  public telStatus = undefined;
  public obj = new UserInfo();
  public sexArray = ['男', '女'];

  constructor(public userEdit: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

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
    this.userEdit.setUser(this.obj);
    this.router.navigate(['/details'], {relativeTo: this.route});
  }



  public checkParamsValid(obj){
    if (!ValidateHelper.isTelephone(obj.tel)){
      alert('请输入正确手机号');
      return false;
    }
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
    } else {
      return true;
    }
  }

  private getUserInfo(): void {
    this.userEdit.getUser();
    this.obj = this.userEdit.obj;
  }
}



