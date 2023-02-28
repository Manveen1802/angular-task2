import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutes, AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule.forChild(AuthRoutes),
  ],
  exports: [RouterModule]
})
export class AuthModule { }
