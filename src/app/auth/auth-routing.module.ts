import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './pages/log-in/log-in.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LogInComponent},
      { path: 'register', component: RegisterUserComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})

export class AuthRoutingModule { }