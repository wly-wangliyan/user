import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public operation = ['编辑','详情']
  public userInfo = new UserInfo();

  constructor(public userService: UserService) { }

  public ngOnInit(): void {
    this.userInfo = this.userService.getUser();
  }

}
