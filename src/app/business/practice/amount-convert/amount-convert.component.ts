import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-convert',
  templateUrl: './amount-convert.component.html',
  styleUrls: ['./amount-convert.component.less']
})
export class AmountConvertComponent implements OnInit {
  public amount: string = undefined; // 输入金额
  public amountArray: any[] = [];
  public finalAmount: string = undefined; // 计算后金额
  public permittedKeycode: any[] = [8, 37, 39];

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.finalAmount = this.amount;
  }

  public onKeydown(e): void{
    const valueLength = e.target.value.length;
    let finalValue: string;
    const targetValue = e.target.value;
    const targetSelectionStart = e.target.selectionStart;
    const targetSelectionEnd = e.target.selectionEnd;
    switch (targetSelectionStart){
      case 0:
        finalValue = e.key + targetValue.substring(targetSelectionEnd, targetValue.length);
        break;
      case valueLength:
        finalValue = targetValue + e.key;
        break;
      default:
        finalValue = targetValue.substring(0, targetSelectionStart) + e.key + targetValue.substring(targetSelectionEnd, valueLength);
    }
    if (!(/^(0|[1-9][0-9]{0,2})(\.\d{0,2})?$/.test(finalValue)) && this.permittedKeycode.indexOf(e.keyCode) === -1){
      e.preventDefault();
    }
  }
}


