import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDetailsComponent } from 'src/app/recipe-details/recipe-details.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  auth: any;
  currentUserId = getAuth().currentUser?.uid as string;
  recipesArray: any[] = [];


  constructor(public firebaseService: FirebaseService, public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFavRecipes(this.currentUserId)
  }
 
  async getFavRecipes(currentUserId: string) {
    const userFavorites = await this.apiService.getUserFavoriteRecipeDetails(currentUserId);
    if (userFavorites) {
      const favoriteRecipesIds = Object.values(userFavorites).forEach(async id => {
        const result =  await this.apiService.getRecipeDetails(id as string);
        this.recipesArray.push(Object.values(result)[0]);
      })
    }

  }

  onClick(recipeId: string) {
    this.apiService.getRecipeDetails(recipeId).then(res => {
      let dialogRef = this.dialog.open(RecipeDetailsComponent, {
        height: '600px',
        width: '1000px',
        data: {
          item: res
        }
      });
    }).catch((error) => {
      console.error(error);
    });

  }

}
