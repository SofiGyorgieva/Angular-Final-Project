import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserRoutingModule } from './user-routing-module';
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    SignOutComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
  ],
})
export class UserModule {   


}

