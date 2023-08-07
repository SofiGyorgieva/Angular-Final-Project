import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    email: '',
    password: '',
    confirmPwd: '',
  }

  isSignedIn = false;
  
  constructor(public firebaseService: FirebaseService, public router: Router) {  }

  ngOnInit(): void {
      if(localStorage.getItem('user') !== null)
        this.isSignedIn = true
      else
      this.isSignedIn = false
  }

  onSignup(form: any){
    console.log(this.user.email, this.user.password, this.user.confirmPwd)
    if (form.valid) {
      this.firebaseService.signup(this.user.email, this.user.password);
    }
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigate(['/']);
    }
  }

}
