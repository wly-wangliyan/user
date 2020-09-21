import { EventEmitter, Injectable } from '@angular/core';
import { UserInfo } from './user.model';
import { Router, ActivatedRoute } from '@angular/router';

const USER_INFO_KEY = 'user_service_info';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public cancelBtnClick: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute){
  }
  public tipDialog: any;

  public saveUser(obj: UserInfo): void {
    if (obj) {
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(obj));
    }
  }

  public getUser(): UserInfo {
    const tmp = localStorage.getItem(USER_INFO_KEY);
    if (tmp) {
      const obj = JSON.parse(tmp);
      const item = new UserInfo();
      item.name = obj.name ? obj.name : '';
      item.age = obj.age ? obj.age : '';
      item.sex = obj.sex ? obj.sex : '';
      item.tel = obj.tel ? obj.tel : '';
      item.address = obj.address ? obj.address : '';
      return item;
    }
    return null;
  }

  // public onCancelClick1(): void {
  //   this.router.navigate(['/list'], { relativeTo: this.route });
  // }

  public onCancelClick(): void {
    // console.log(this.tipDialog);
    this.tipDialog.nativeElement.style.display = 'block';
  }

  public onmakeSureCancel(): void {
    this.cancelBtnClick.emit();
    this.tipDialog.nativeElement.style.display = 'none';
    this.router.navigate(['/list'], { relativeTo: this.route });
  }

  public noCancel(): void {
    this.tipDialog.nativeElement.style.display = 'none';
  }
}
