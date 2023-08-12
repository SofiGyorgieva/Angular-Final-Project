import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  fetchedData: any;
  item: any;
  
  constructor(public apiService: ApiService, public dialog: MatDialog) { } 


  ngOnInit(): void {
   this.apiService.getRecipes().then(res => {
      this.fetchedData = Object.keys(res).map(key => ({
        id: key,
        ...res[key]
      }));
      console.log(this.fetchedData)
   })
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

