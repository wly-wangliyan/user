import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.less']
})
export class PracticeComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }
}
