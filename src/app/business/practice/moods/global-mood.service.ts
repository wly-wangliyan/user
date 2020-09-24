import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodService {

  public globalMoodList: string[] = ['happy', 'sad', 'joyful', 'peaceful', 'lost', 'angry', 'cheerful', 'boring'];

  constructor() { }


  private getRandomNumberByRange(start, end): number{
    return Math.floor(Math.random() * (end - start) + start);
  }

  public produceAGlobalMood(): string{
    const bNumber: number = this.getRandomNumberByRange(0, 7);
    return this.globalMoodList[bNumber];
  }

}
