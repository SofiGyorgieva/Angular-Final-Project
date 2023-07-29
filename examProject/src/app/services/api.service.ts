import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set, onValue, child } from '@firebase/database';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {  }

  async getRecipes() {
    let app = initializeApp(environment.firebaseConfig);
    let db = getDatabase(app);
    let reegef = ref(db, '/recipes');
    const snapshot = await get(reegef)
    const data = snapshot.val();
    return data;
  }
}
