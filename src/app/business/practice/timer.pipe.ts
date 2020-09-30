import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any): string {
    let second = Math.floor(Number(value) / 100);
    const b = Number(value) % 100;
    let min = 0;
    let h = 0; // 初始化小时
    let result = '';
    if (second >= 60) {// 如果秒数大于60，将秒数转换成整数
      min = Math.floor(second / 60); // 获取分钟，除以60取整数，得到整数分钟
      second = second % 60; // 获取秒数，秒数取佘，得到整数秒数
      if (min >= 60) {// 如果分钟大于60，将分钟转换成小时
        h = Math.floor(min / 60); // 获取小时，获取分钟除以60，得到整数小时
        min = min % 60; // 获取小时后取佘的分，获取分钟除以60取佘的分
      }
    }
    result = this.formatConvert(h) + ':' + this.formatConvert(min) + ':' + this.formatConvert(second) + '.' + this.formatConvert(b);
    return result;
  }

  private formatConvert(value: number): string {
    if (String(value).length === 1) {
      return ('0' + String(value));
    } else {
      return String(value);
    }
  }

}
