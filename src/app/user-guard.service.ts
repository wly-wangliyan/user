import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) { }

  // 未新建个人信息守卫
  canActivate(): boolean {
    if (!this.userService.getUser()) {
      alert('请先保存个人信息');
      this.router.navigate(['/home'], { relativeTo: this.route });
      return false;
    } else {
      return true;
    }
  }
}
