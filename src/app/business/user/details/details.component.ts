import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../../user.model';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.less'],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  public userInfo = new UserInfo();

  constructor(public userService: UserService) {}

  public ngOnInit(): void {
    this.userInfo = this.userService.getUser();
  }
}
