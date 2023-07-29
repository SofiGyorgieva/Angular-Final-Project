import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserModule } from 'src/app/user/user.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isSignedIn = false;
  constructor(public fbAuth: AngularFireAuth, public userMdl: UserModule, public firebaseService: FirebaseService) {
  }

  async onSignout (){
    console.log('Signed out!')
    await this.firebaseService.signout()
    if(!this.firebaseService.isLoggedIn) {
      this.isSignedIn = false
    }
  }

}
