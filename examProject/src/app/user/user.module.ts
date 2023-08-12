import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserRoutingModule } from './user-routing-module';
import { SignOutComponent } from './sign-out/sign-out.component';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    SignOutComponent,
    FavoritesComponent,
    MyRecipesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
  ],
})
export class UserModule {   


}

