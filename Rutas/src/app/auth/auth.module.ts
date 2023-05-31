import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    Login2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
})
export class AuthModule { }
