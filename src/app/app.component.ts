import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('cancelbtn') tipModal : HTMLDivElement;

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute){
    // console.log(this.tipModal); 
  }

  public onClickChooseMenu(e): void{
    const aItems: any=document.getElementsByTagName('a');
    for(const item of aItems){
      if(item.id === e.target.id){
        item.style.backgroundColor='#555';
      }else{
        item.style.backgroundColor='#f1f1f1';
      }
    }
  }

  ngAfterViewInit(){
    console.log(this.tipModal);
    this.userService.tipDialog = this.tipModal;
  }

  onClickEvent(e){
    console.log(e.target.id);
  }
}
