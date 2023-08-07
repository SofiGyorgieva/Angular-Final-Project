import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set, onValue, child } from '@firebase/database';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  app = initializeApp(environment.firebaseConfig);
  db = getDatabase(this.app);

  constructor() {  }

  async getRecipes() {
    let reegef = ref(this.db, '/recipes');
    const snapshot = await get(reegef)
    const data = snapshot.val();
    return data;
  }

  async getRecipeDetails(id: string) {
    let reegef = ref(this.db, `/recipes/${id}`);
    const snapshot = await get(reegef)
    const data = snapshot.val();
    return data;
  }
}
