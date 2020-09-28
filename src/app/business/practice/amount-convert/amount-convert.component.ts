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
    if (window.getSelection && window.getSelection().toString().length > 0){
      const a = window.getSelection().toString().length;
      e.target.value = e.target.value.substring(0, valueLength - a);
    }
    let finalValue: string;
    const targetValue = e.target.value;
    const targetSelectionStart = e.target.selectionStart;
    switch (targetSelectionStart){
      case 0:
        finalValue = e.key + targetValue;
        break;
      case valueLength:
        finalValue = targetValue + e.key;
        break;
      default:
        finalValue = targetValue.substring(0, targetSelectionStart) + e.key + targetValue.substring(targetSelectionStart, valueLength);
    }
    if (!(/^(0|[1-9][0-9]{0,2})(\.\d{0,2})?$/.test(finalValue)) && this.permittedKeycode.indexOf(e.keyCode) === -1){
      e.preventDefault();
    }
  }
}


