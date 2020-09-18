import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';
import { validateHelper, ValidateHelper } from '../utils/validate-helper';

@Component({
  selector: 'app-edit',
  styleUrls: ['./edit.component.less'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {

  public userInfo = new UserInfo();
  public sexArray = ['男', '女'];

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.userInfo = this.userService.getUser();
  }

  public onSetEditFormSubmit(): void {
    if (this.checkParamsValid(this.userInfo)) {
      this.userService.saveUser(this.userInfo);
      this.router.navigate(['/details'], { relativeTo: this.route });
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
