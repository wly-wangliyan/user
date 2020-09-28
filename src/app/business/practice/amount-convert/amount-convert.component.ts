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

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.finalAmount = this.amount;
  }
}


