import { Component, OnInit, OnDestroy } from '@angular/core';
import {GlobalMoodService} from './global-mood.service';
import {MomentMoodService} from './moment-mood.service';


@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.less']
})
export class MoodsComponent implements OnInit, OnDestroy {

  public globalMood = '';
  public momentMood = '';
  constructor(public globalMoodService: GlobalMoodService, public momentMoodService: MomentMoodService) { }

  ngOnInit(): void {
    this.momentMood = this.momentMoodService.getAMomentMood();
  }

  // 随机产生一种心情类型
  public produceOneMoodBtnClick(): void{
    const aNumber: number = Math.random();
    if (aNumber > 0.5){
      this.globalMood = this.globalMoodService.produceAGlobalMood();
    }else{
      this.momentMood = this.momentMoodService.produceAMomentMood();
    }
  }

  public ngOnDestroy(): void{
    sessionStorage.removeItem('momentMoodSession');
  }
}
