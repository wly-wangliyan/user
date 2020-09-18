import { Injectable } from '@angular/core';
import { UserInfo } from './user.model';

const USER_INFO_KEY = 'user_service_info';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // private obj = new UserInfo();

  // // 向本地存数据
  // public setUser(obj: any): void {
  //   for (const key in obj) {
  //     if (key) {
  //       localStorage.setItem(key, obj[key]);
  //     }
  //   }
  // }

  // // 从本地获取数据
  // public getUser(): UserInfo {
  //   for (const key in this.obj) {
  //     if (key) {
  //       const tmp = localStorage.getItem(key);
  //       this.obj[key] = (tmp === 'null' || tmp === 'undefined') ? '' : tmp;
  //     }
  //   }
  //   return this.obj;
  // }

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

  // // 判断若返回null或undefined则显示为空
  // public isNull(obj: any): void {
  //   for (const key in obj) {
  //     if (obj[key] === 'null' || obj[key] === 'undefined') {
  //       obj[key] = '';
  //     }
  //   }
  // }
}
