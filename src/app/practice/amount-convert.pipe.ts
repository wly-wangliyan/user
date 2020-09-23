import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountConvert'
})

export class AmountConvertPipe implements PipeTransform {

  transform(value: number): number {
    const a = value + 1;
    return (a);
  }
}
