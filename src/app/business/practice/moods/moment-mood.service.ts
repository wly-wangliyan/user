import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentMoodService {

  public momentMoodList = ['happy', 'sad', 'joyful', 'peaceful', 'lost', 'angry', 'cheerful', 'boring'];

  constructor() { }

  // 随机选择一种心情
  public produceAMomentMood(): string{
    const randomNumber: number = this.getRandomNumberByRange(0, 7);
    // sessionStorage.momentMoodSession = this.momentMoodList[randomNumber];
    return this.momentMoodList[randomNumber];
  }

  // 从本地获取心情数据
  // public getAMomentMood(): string{
  //   return sessionStorage.getItem('momentMoodSession');
  // }

  private getRandomNumberByRange(start, end): number{
    return Math.floor(Math.random() * (end - start) + start);
  }
}
