import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FirebaseService } from '../services/firebase.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
  currentRecipe: any;
  currentUserId = getAuth().currentUser?.uid as string;
  user: any;
  favorites: Array<string> = [];
  isAddedToFavorites = false;
  toggleFavoritesText: string = '';
  userId: string = '';

  constructor(
    public dialogRef: MatDialogRef<RecipeDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService,
    public firebaseService: FirebaseService
  ) {
    this.currentRecipe = Object.values(data?.item)[0];
  }

  async ngOnInit(): Promise<void> {
    this.checkUserFavorites();
  }
  
  async checkUserFavorites(): Promise<void> {
    await this.apiService.getUserDetails(this.currentUserId)
      .then(res => {
        if(res == null) {
          this.isAddedToFavorites = false;
        } else {
          this.user = Object.values(res)[0];
          this.favorites = this.user.favorites;
        }
      })
    if (this.favorites) {
      if (Object.values(this.favorites).includes(this.currentRecipe._id)) {
        this.isAddedToFavorites = true;
      } else {
        this.isAddedToFavorites = false;
      }
    } else {
      this.isAddedToFavorites = false;
    }
    this.toggleFavoritesText = this.isAddedToFavorites ? "Remove from favorites" : "Add to favorites"
  }

  async toggleFavorite() {
    if (!this.isAddedToFavorites) {
      await this.apiService.addToUserFavorites(this.currentUserId, this.currentRecipe._id);
      this.checkUserFavorites();
    } else {
      await this.apiService.removeFromUserFavorites(this.currentUserId, this.currentRecipe._id);
      this.checkUserFavorites();
    }
  }

  async deleteRecipe() {
      await this.apiService.deleteRecipe(this.currentUserId, this.currentRecipe._id)
      await this.apiService.removeFromUserFavorites(this.currentUserId, this.currentRecipe._id);
      this.dialogRef.close('deleted');
  }

}
