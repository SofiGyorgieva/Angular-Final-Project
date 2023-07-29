import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  isSignedIn = false

  constructor (public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignin(email: string, password: string){
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn) {
    this.isSignedIn = true
    this.router.navigate(['/home']);
    }
  } 
}
