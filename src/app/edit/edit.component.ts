import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  public obj: any = {
    name: '',
    age: '',
    sex: '',
    tel: '',
    address: ''
  };
  public disabled = false;
  constructor(public userEdit: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  setUserInfo(): void{
    this.userEdit.setUser(this.obj);
  }

  getUserInfo(): void{
    this.userEdit.getUser();
    this.obj = this.userEdit.obj;
  }
}
