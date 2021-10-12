import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './pages/register-user/register-user.component';



@NgModule({
  declarations: [
    SignInComponent,
    LogInComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
