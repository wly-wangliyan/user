import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';
import { validateHelper, ValidateHelper } from '../utils/validate-helper';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  @ViewChild('cancelbtn') cancelbtn: ElementRef;

  public userInfo = new UserInfo();
  public sexArray = ['男', '女'];

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
  }

  public onSetEditFormSubmit(): void {
    if (this.checkParamsValid(this.userInfo)) {
      this.userService.saveUser(this.userInfo);
      this.router.navigate(['/details'], { relativeTo: this.route });
    }
  }

  public onCancelClick1(): void {
    this.router.navigate(['/details'], { relativeTo: this.route });
  }

  public onCancelClick(): void {
    console.log(this.cancelbtn);
    this.cancelbtn.nativeElement.style.display = 'block';
  }

  public makeSureCancel(): void {
    this.cancelbtn.nativeElement.style.display = 'none';
    this.router.navigate(['/details'], { relativeTo: this.route });
  }

  public noCancel(): void {
    this.cancelbtn.nativeElement.style.display = 'none';
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
