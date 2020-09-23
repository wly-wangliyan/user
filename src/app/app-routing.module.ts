import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './user/details/details.component';
import { EditComponent } from './user/edit/edit.component';
import { AddComponent } from './user/add/add.component';
import { UserGuardService } from './user-guard.service';
import { ListComponent } from './user/list/list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent, canActivate: [UserGuardService] },
  { path: 'edit', component: EditComponent, canActivate: [UserGuardService] },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'practice', loadChildren: () => import('./practice/practice.module')
      .then(mod => mod.PracticeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
