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

  async onSignup(form: any){
    try {
      if (form.valid) {
        await this.firebaseService.signup(this.user.email, this.user.password);
        this.router.navigate(['/']);
      }
    } catch (error) {
      alert(error);
    }
   
    
  }

}
