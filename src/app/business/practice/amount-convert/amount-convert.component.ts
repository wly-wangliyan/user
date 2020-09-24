import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-convert',
  templateUrl: './amount-convert.component.html',
  styleUrls: ['./amount-convert.component.less']
})
export class AmountConvertComponent implements OnInit {
  public amount: string = undefined;
  public amountArray: any[] = [];
  public amount1: string = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {

    this.amount1 = this.amount;
  }
}


