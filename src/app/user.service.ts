import { EventEmitter, Injectable } from '@angular/core';
import { UserInfo } from './user.model';

const USER_INFO_KEY = 'user_service_info';

@Injectable()
export class UserService {

  public cancelBtnClick: EventEmitter<any> = new EventEmitter();
  public out: EventEmitter<any> = new EventEmitter();
  public out1: EventEmitter<any> = new EventEmitter();
  public tipDialog: any;
  isOpen = false;

  constructor(){
  }

  // 向本地存储数据
  public saveUser(obj: UserInfo): void {
    if (obj) {
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(obj));
      this.out.emit();
    }
  }

  // 从本地获取数据
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

  // 存在未保存数据时点击取消按钮触发
  public cancelClick(): void {
    this.tipDialog.nativeElement.style.display = 'block';
  }

  // 提示弹框点击确定
  public onSureCancelBtnClick(): void {
    this.cancelBtnClick.emit();
    this.tipDialog.nativeElement.style.display = 'none';
  }

  // 提示弹框点击取消
  public onUnCancelBtnClick(): void {
    this.tipDialog.nativeElement.style.display = 'none';
  }

  public toggle(): void {
    // this.tipDialog.nativeElement.style.display = 'block';
    this.isOpen = !this.isOpen;
    this.out1.emit();
    console.log(this.tipDialog.nativeElement.style.display);
  }
}
