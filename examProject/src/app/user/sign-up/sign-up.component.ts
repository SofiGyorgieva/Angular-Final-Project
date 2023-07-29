import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isSignedIn = false
  constructor(public firebaseService: FirebaseService, public router: Router) {  }

  ngOnInit(): void {
      if(localStorage.getItem('user') !== null)
        this.isSignedIn = true
      else
      this.isSignedIn = false
  }

  async onSignup(email: string, password: string){
    console.log(email, password)
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigate(['/']);
    }
  }

}
