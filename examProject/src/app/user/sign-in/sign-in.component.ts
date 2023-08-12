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

  constructor (public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit(): void {

  }

  async onSignin(form: any): Promise<void> {
    if (form.valid) {
      await this.firebaseService.signin(this.user.email, this.user.password);
      if (this.firebaseService.isLoggedIn) {
      this.router.navigate(['/home']);
        }
      }
  }
      
} 
    
   

