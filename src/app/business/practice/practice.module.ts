import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PracticeRoutingModule} from './practice-routing.module';
import {PracticeComponent} from './practice.component';
import {AmountConvertComponent} from './amount-convert/amount-convert.component';
import {MoodsComponent} from './moods/moods.component';
import {FormsModule} from '@angular/forms';
import {AmountConvertPipe} from './amount-convert.pipe';
import {TimerComponent} from './timer/timer.component';
import {MapComponent} from './map/map.component';
import {TimerPipe} from './timer.pipe';

@NgModule({
  declarations: [PracticeComponent, AmountConvertComponent, MoodsComponent, AmountConvertPipe, TimerComponent, MapComponent, TimerPipe],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    FormsModule,
  ],
  exports: [PracticeComponent]
})
export class PracticeModule {
}
