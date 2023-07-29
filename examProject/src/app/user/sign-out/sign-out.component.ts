import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent {

  constructor(public firebaseService: FirebaseService) {  }

  async onSignout (){
    console.log('Signed out!')
    await this.firebaseService.signout()
  }
}
