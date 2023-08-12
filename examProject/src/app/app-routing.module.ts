import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { CreateComponent } from './createRecipe/create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'recipes/create', component: CreateComponent},
  { path: 'user/favorites', component: FavoritesComponent},
  { path: 'user/sign-in', component: SignInComponent},
  { path: 'user/sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
