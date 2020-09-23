import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailsComponent} from './user/details/details.component';
import {EditComponent} from './user/edit/edit.component';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './user/add/add.component';
import {ListComponent} from './user/list/list.component';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EditComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
