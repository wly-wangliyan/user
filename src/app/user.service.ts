import { EventEmitter, Injectable } from '@angular/core';
import { UserInfo } from './user.model';

const USER_INFO_KEY = 'user_service_info';

@Injectable()
export class UserService {

  public saveBroadcast: EventEmitter<any> = new EventEmitter();
  public practiceModalStatus: EventEmitter<any> = new EventEmitter();
  constructor(){
  }

  // 点击页面上方导航栏
  public onClickMenu(): void{
    this.practiceModalStatus.emit();
  }

  // 向本地存储数据
  public saveUser(obj: UserInfo): void {
    if (obj) {
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(obj));
      this.saveBroadcast.emit();
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
}
