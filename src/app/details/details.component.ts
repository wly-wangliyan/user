// import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  public obj: any = { };

  constructor(public userDetail: UserService) { }

  ngOnInit(): void {
    this.userDetail.getUser();
    this.obj = this.userDetail.obj;
    this.userDetail.isNull(this.obj);
  }

  isExist(): boolean{
    for (const key in this.obj){
      if (this.obj[key]){
        return true;
      }
    }
    return false;
  }
}
