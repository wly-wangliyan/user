import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodService {

  public globalMoodList: string[] = ['happy', 'sad', 'joyful', 'peaceful', 'lost', 'angry', 'cheerful', 'boring'];

  constructor() { }

  // 从心情列表中选择一个心情
  public produceAGlobalMood(): string{
    const randomNumber: number = this.getRandomNumberByRange(0, 7);
    return this.globalMoodList[randomNumber];
  }

  // 产生0~7之间的随机数
  private getRandomNumberByRange(start, end): number{
    return Math.floor(Math.random() * (end - start) + start);
  }

}