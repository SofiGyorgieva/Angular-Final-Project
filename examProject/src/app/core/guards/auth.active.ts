import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';


@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if(!this.firebaseService.isLoggedIn){
        this.router.navigate(['/user/sign-in']);
        return false;
    } 
    return true;
  }
}