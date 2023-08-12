import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set, onValue, child, query, orderByChild, equalTo, update, push } from '@firebase/database';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  app = initializeApp(environment.firebaseConfig);
  db = getDatabase(this.app);
  userObj: any; 
  favorites: any;

  constructor() {  }

  async getRecipes() {
    let reference = ref(this.db, '/recipes');
    const snapshot = await get(reference)
    const data = snapshot.val();
    //console.log(data)
    return data;
  }

  async getRecipeDetails(id: string | null) {
    const recipeDetailsRef = query(ref(this.db, 'recipes'), orderByChild('_id'), equalTo(id));
    const snapshot = await get(recipeDetailsRef);
    const data = snapshot.val();
    return data;
  }

  createRecipe(uid: string, form: any){
    let id = Math.random().toString(36).substring(2, 8)
    const data = {
      _id: id,
      ...form.value,
      author: uid
    }

    //console.log(data);

    let updates = {
      [id]: data
    }
    const dbRef = ref(this.db, '/recipes');
    update(dbRef, updates)
  }

  async createUser(uid: any) {
    const data = {
      uid: uid
    }
    let updates = {
      [uid]: data
    }

    const dbRef = ref(this.db, '/users');
    update(dbRef, updates)
  }

  async getUserDetails(uid: string) {
    const userRef = query(ref(this.db, 'users'), orderByChild('uid'), equalTo(uid));
    const snapshot = await get(userRef);
    const data = snapshot.val();
    return data;
  }

  async addToUserFavorites(uid: string, recipeId: string) {
    const newUserKey: any = push(child(ref(this.db), `users/${uid}/favorites/`)).key;
  
    //const key = '/users/' + newUserKey;

    const dbRef = ref(this.db, `users/${uid}/favorites/`);
    await update(dbRef, {[newUserKey]: recipeId})
  }

  async removeFromUserFavorites(uid: string, recipeId: string) {
    const dbRef = ref(this.db, `users/${uid}/favorites/`);

    await get(dbRef).then((snapshot) => {
      const data = snapshot.val();
      
      let keyToRemove = null;
      for (const key in data) {
        if (data[key] === recipeId) {
          keyToRemove = key;
          break;
        }
      }

      if (keyToRemove !== null) {
        delete data[keyToRemove];
        return set(dbRef, data);
      } else {
        console.log("Value not found in the object");
        return null;
      }
    }).catch((error) => {
      console.error("Error:", error);
    });
  }

  async getUserFavoriteRecipeDetails(uid: string) {
    try {
      const favoritesRef = ref(this.db, `users/${uid}/favorites/`)
      const userDetails = await get(favoritesRef)
      const userFavorites = userDetails.val();

      return userFavorites;
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  async getRecipesByAuthor(uid: string) {
    try {
      const userRef = query(ref(this.db, 'recipes'), orderByChild('author'), equalTo(uid));
      const snapshot = await get(userRef);
      const data = snapshot.val();
      //console.log(data);
      return data;
    } catch (error) {
      alert(`Error: ${error}`)
    }

  }

}


