import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  dialogRef: any;
  
  constructor(public apiService: ApiService,
     public dialog: MatDialog,
     private cdr: ChangeDetectorRef,) { } 


  ngOnInit(): void {
    this.getAllRecipes();
  }

  async getAllRecipes(){
   await this.apiService.getRecipes().then(res => {
      this.fetchedData = Object.keys(res).map(key => ({
        id: key,
        ...res[key]
      }));
   })
  }

  onClick(recipeId: string) {
    this.apiService.getRecipeDetails(recipeId).then(res => {
      this.dialogRef = this.dialog.open(RecipeDetailsComponent, {
        height: 'fit-content',
        width: 'fit-content',
        data: {
          item: res
        }
      });
      this.dialogRef.afterClosed().subscribe(async (result: any) => {
        console.log(`Dialog result: ${result}`);
        if (result === 'deleted'){
          await this.getAllRecipes();
          this.cdr.detectChanges(); 
        }
      });
    }).catch((error) => {
      console.error(error);
    });

  }



}

