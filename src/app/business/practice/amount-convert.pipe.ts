import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountConvert'
})

export class AmountConvertPipe implements PipeTransform {

  public amount: string = undefined;
  public amountArray: any[] = [];
  public result: string = undefined;
  private characterStore: any = {
    0: '零',
    1: '壹',
    2: '贰',
    3: '叁',
    4: '肆',
    5: '伍',
    6: '陆',
    7: '柒',
    8: '捌',
    9: '玖',
    10: '拾',
  };

  public transform(value: string): string {
    if (Number(value) % 1 === 0) {
      this.result = this.integerConvert(value);
    } else {
      if (value) {
        this.amountArray = value.split('.');
        if (Number(value) < 1) {
          this.result = this.decimalConvert(this.amountArray[1]);
        } else {
          this.result = this.integerConvert(this.amountArray[0]) + this.decimalConvert(this.amountArray[1]);
        }
      }
    }
    return this.result;
  }

  // 转换整数部分
  private integerConvert(param: string): string {
    const numberConvert = Number(param);
    let temporaryValue: string;
    if (numberConvert === 0) {
      temporaryValue = '零元';
    } else if (numberConvert <= 10){
      temporaryValue = this.characterStore[numberConvert] + '元';
    } else if (numberConvert < 20){
      temporaryValue = '拾' + this.characterStore[param.charAt(1)] + '元';
    }else if (numberConvert < 100) {
      if (numberConvert % 10 === 0) {
        temporaryValue = this.characterStore[param.charAt(0)] + '拾元';
      } else {
        temporaryValue = this.characterStore[param.charAt(0)] + '拾' + this.characterStore[param.charAt(1)] + '元';
      }
    }else {
      if (numberConvert % 100 === 0) {
        temporaryValue = this.characterStore[param.charAt(0)] + '佰元';
      } else if (numberConvert % 10 === 0) {
        temporaryValue = this.characterStore[param.charAt(0)] + '佰' + this.characterStore[param.charAt(1)] + '拾元';
      } else {
        if (param.charAt(1) === '0') {
          temporaryValue = this.characterStore[param.charAt(0)] + '佰零' + this.characterStore[param.charAt(2)] + '元';
        } else {
          // tslint:disable-next-line: max-line-length
          temporaryValue = this.characterStore[param.charAt(0)] + '佰' + this.characterStore[param.charAt(1)] + '拾' + this.characterStore[param.charAt(2)] + '元';
        }
      }
    }
    return temporaryValue;
  }

  // 转换小数部分
  private decimalConvert(param: string): string {
    let digitResult: string;
    const digitConvert = Number(param);
    if (digitConvert === 0) {
      digitResult = '';
    } else{
      if (param.length === 1) {
        digitResult = this.characterStore[param] + '角';
      } else {
        if (param.charAt(0) === '0') {
          digitResult = this.characterStore[param.charAt(1)] + '分';
        } else if (param.charAt(1) === '0'){
          digitResult = this.characterStore[param.charAt(0)] + '角';
        } else {
          digitResult = this.characterStore[param.charAt(0)] + '角' + this.characterStore[param.charAt(1)] + '分';
        }
      }
    }
    return digitResult;
  }
}
