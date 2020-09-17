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

  public obj = new UserInfo();
  public sexArray = ['男', '女'];
  public ValidateHelper = new ValidateHelper();

  constructor(public userEdit: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.getUserInfo();
    this.userEdit.isNull(this.obj);
  }

  public onSetEditFormSubmit(): void {
    if (this.checkParamsValid(this.obj)) {
      this.userEdit.setUser(this.obj);
      this.router.navigate(['/details'], {relativeTo: this.route});
    }
  }

  private checkParamsValid(obj: any): boolean {
    if (!this.ValidateHelper.isTelephone(obj.tel)) {
      alert('请输入正确手机号');
      return false;
    }
    if (!this.ValidateHelper.isNumber(obj.age)) {
      alert('请输入正确年龄');
      return false;
    }
    return true;
  }

  private getUserInfo(): void {
    this.userEdit.getUser();
    this.obj = this.userEdit.obj;
  }
}



