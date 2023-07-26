import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserRoutingModule } from './user-routing-module';
import { FirebaseService } from '../services/firebase.service';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ],
})
export class UserModule {   


}

