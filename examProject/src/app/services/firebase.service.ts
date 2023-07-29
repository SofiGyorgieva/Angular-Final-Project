import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  if(isLoggedIn: boolean) {
    throw new Error('Method not implemented.');
  }

  isLoggedIn = false

  constructor( public firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  signout(){
    this.firebaseAuth.signOut()
    this.isLoggedIn = false;
    localStorage.removeItem('user')
  }
}
