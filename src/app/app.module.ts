import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailsComponent} from './business/user/details/details.component';
import {EditComponent} from './business/user/edit/edit.component';
import {HomeComponent} from './business/home/home.component';
import {AddComponent} from './business/user/add/add.component';
import {ListComponent} from './business/user/list/list.component';
import {UserService} from './user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
