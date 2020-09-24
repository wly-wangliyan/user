import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PracticeRoutingModule} from './practice-routing.module';
import {PracticeComponent} from './practice.component';
import {AmountConvertComponent} from './amount-convert/amount-convert.component';
import {MoodsComponent} from './moods/moods.component';
import {FormsModule} from '@angular/forms';
import {AmountConvertPipe} from './amount-convert.pipe';


@NgModule({
  declarations: [PracticeComponent, AmountConvertComponent, MoodsComponent, AmountConvertPipe],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    FormsModule,
  ],
  exports: [PracticeComponent]
})
export class PracticeModule {
}
