import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BirthdayTwentyfiveComponent } from './birthday-twenty-five/component/birthday-twentyfive/birthday-twentyfive.component';
import { LoginPageComponent } from './birthday-twenty-five/component/login/login-page/login-page/login-page.component';
import { ViewComponent } from './birthday-twenty-five/component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BirthdayTwentyfiveComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
