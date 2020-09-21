import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';
import { validateHelper, ValidateHelper } from '../utils/validate-helper';

@Component({
  selector: 'app-edit',
  styleUrls: ['./edit.component.less'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit, OnDestroy{

  private subscription: Subscription;

  public userInfo = new UserInfo();
  public sexArray = ['男', '女'];
  private fromPath: 'list' | 'details' = 'list';

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(map => {
      this.fromPath = map.get('from') === 'details' ? 'details' : 'list';
    });
    console.log(this.fromPath);
  }

  public ngOnInit(): void {
    if (!!this.userService.getUser()) {
      this.userInfo = this.userService.getUser();
    }
    this.subscription = this.userService.cancelBtnClick.subscribe(() => {
      this.navigated();
    });
  }

  public ngOnDestroy(): void{
    this.subscription && this.subscription.unsubscribe();
  }

  public onSetEditFormSubmit(): void {
    if (this.checkParamsValid(this.userInfo)) {
      this.userService.saveUser(this.userInfo);
      this.router.navigate(['/list'], { relativeTo: this.route });
    }
  }

  public onCancelClick(value: boolean): void {
    if (value) {
      this.userService.cancelClick();
    } else {
      this.navigated();
    }
  }

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
