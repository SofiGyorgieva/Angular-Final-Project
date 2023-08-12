import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserModule } from 'src/app/user/user.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{
  
  constructor(
    public fbAuth: AngularFireAuth, 
    public userMdl: UserModule, 
    public firebaseService: FirebaseService, 
    public router: Router) { }

   onSignout(){
     this.firebaseService.signout()
     this.router.navigate(['/home']);
  }

}
