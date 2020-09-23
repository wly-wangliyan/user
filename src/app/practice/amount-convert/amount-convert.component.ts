import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-convert',
  templateUrl: './amount-convert.component.html',
  styleUrls: ['./amount-convert.component.less']
})
export class AmountConvertComponent implements OnInit {
  public amount = 0;
  public amountConvert = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void{
    this.amountConvert = Number(this.amount);
  }

}
