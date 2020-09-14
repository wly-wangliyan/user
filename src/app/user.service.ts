import { Injectable } from '@angular/core';
// import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public obj: any = {
    name: '',
    age: '',
    sex: '',
    tel: '',
    address: '',
  };

  // 向本地存数据
  public setUser(obj: any): void {
    for (const key in obj) {
      if (key) {
        localStorage.setItem(key, obj[key]);
      }
    }
  }

  // 从本地获取数据
  public getUser(): void {
    for (const key in this.obj) {
      if (key) {
        this.obj[key] = localStorage.getItem(key);
      }
    }
  }

  // 判断若返回null或undefined则显示为空
  public isNull(obj: any): void {
    for (const key in obj) {
      if (obj[key] === 'null' || obj[key] === 'undefined') {
        obj[key] = '';
      }
    }
  }
}
