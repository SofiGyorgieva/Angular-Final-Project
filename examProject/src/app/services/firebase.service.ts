import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from './api.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  if(isLoggedIn: boolean) {
    throw new Error('Method not implemented.');
  }

  isLoggedIn = false;
  auth: any; 
  user: any;

  constructor( public firebaseAuth: AngularFireAuth, public apiService: ApiService) { }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    }).catch((e) => {
      alert(`Following error occured: ${e}`);
    })
  }

  async signup(email: string, password: string){
    try {
      const newUser = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      if (newUser){
        await this.apiService.createUser(newUser.user?.uid)
      }
    } catch (error) {
        alert(`The following error appeared: ${error}`)
    }
  }
  
  signout(){
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

}
