import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentMoodService {

  public momentMoodList = ['happy', 'sad', 'joyful', 'peaceful', 'lost', 'angry', 'cheerful', 'boring'];

  constructor() { }

  private getRandomNumberByRange(start, end): number{
    return Math.floor(Math.random() * (end - start) + start);
  }

  public produceAMomentMood(): string{
    const bNumber: number = this.getRandomNumberByRange(0, 7);
    sessionStorage.momentMoodSession = this.momentMoodList[bNumber];
    return this.momentMoodList[bNumber];
  }

  public getAMomentMood(): string{
    return sessionStorage.getItem('momentMoodSession');
  }


}
