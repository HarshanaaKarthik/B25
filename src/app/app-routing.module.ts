import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayTwentyfiveComponent } from './birthday-twenty-five/component/birthday-twentyfive/birthday-twentyfive.component';
import { ViewComponent } from './birthday-twenty-five/component/view/view.component';

const routes: Routes = [
  {
    path: 'birthday',
    component: BirthdayTwentyfiveComponent
  },
  {
    path: 'view-birthday',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
