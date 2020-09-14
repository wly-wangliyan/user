// import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.less'],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  public obj: any = {};

  constructor(public userDetail: UserService) { }

  public ngOnInit(): void {
    this.userDetail.getUser();
    this.obj = this.userDetail.obj;
    this.userDetail.isNull(this.obj);
  }

  public isExist(): boolean {
    for (const key in this.obj) {
      if (this.obj[key]) {
        return true;
      }
    }
    return false;
  }
}
