import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeComponent } from './practice.component';
import { AmountConvertComponent } from './amount-convert/amount-convert.component';
import {MoodsComponent} from './moods/moods.component';
import {UserGuardService} from '../../user-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PracticeComponent,
    canActivate: [UserGuardService],
    children: [  {
      path: 'amount-convert',
      component: AmountConvertComponent
    },
      {
      path: 'moods',
      component: MoodsComponent
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
