import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDetailsComponent } from 'src/app/recipe-details/recipe-details.component';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {
  fetchedData: any;
  dialogRef: any;
  currentUserId = getAuth().currentUser?.uid as string;

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
      this.getUserRecipes()
    }

    getUserRecipes() {
      this.apiService.getRecipesByAuthor(this.currentUserId).then(res => {
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
          if (result === 'deleted'){
            await this.getUserRecipes();
            this.cdr.detectChanges(); 
          }
        });
      }).catch((error) => {
        console.error(error);
      });
  
    }
}


