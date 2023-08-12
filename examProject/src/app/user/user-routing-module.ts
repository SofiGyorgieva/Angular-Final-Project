import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';

const routes: Routes = [
  { path: 'user/sign-in', component: SignInComponent},
  { path: 'user/sign-up', component: SignUpComponent},
  { path: 'user/sign-out', component: SignOutComponent},
  { path: 'user/my-favorites', component: FavoritesComponent},
  { path: 'user/my-recipes', component: MyRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
