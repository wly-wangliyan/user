import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { UserGuardService } from './user-guard.service';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent, canActivate: [UserGuardService] },
  { path: 'edit', component: EditComponent, canActivate: [UserGuardService] },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
