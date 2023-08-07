import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  isSignedIn = false

  constructor (public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  onSignin(form: any): void {
    if (form.valid) {
      this.firebaseService.signin(this.user.email, this.user.password);
      
      if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigate(['/home']);
        }
      }
  }
      
} 
    
   

