import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set, onValue, child } from '@firebase/database';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {  }

  getRecipes() {
    let app = initializeApp(environment.firebaseConfig);
    let db = getDatabase(app);
    let reegef = ref(db, '/recipes');
    console.log('getReciepesLog')
    onValue(reegef, (snapshot) => {
      console.log('getReciepesLog1')
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
  }
}
