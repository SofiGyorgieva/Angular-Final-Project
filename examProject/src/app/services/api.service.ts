import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set, onValue, child, query, orderByChild, equalTo } from '@firebase/database';
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
    let reference = ref(this.db, '/recipes');
    const snapshot = await get(reference)
    const data = snapshot.val();
    return data;
  }

  async getRecipeDetails(id: string | null) {
    const myOffersRef = query(ref(this.db, 'recipes'), orderByChild('_id'), equalTo(id));
    const snapshot = await get(myOffersRef);
    const data = snapshot.val();
    return data;
  }
}
