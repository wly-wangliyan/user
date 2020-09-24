import { HomeComponent } from './business/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './business/user/details/details.component';
import { EditComponent } from './business/user/edit/edit.component';
import { AddComponent } from './business/user/add/add.component';
import { UserGuardService } from './user-guard.service';
import { ListComponent } from './business/user/list/list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent, canActivate: [UserGuardService] },
  { path: 'edit', component: EditComponent, canActivate: [UserGuardService] },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'practice', loadChildren: () => import('./business/practice/practice.module')
      .then(mod => mod.PracticeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
