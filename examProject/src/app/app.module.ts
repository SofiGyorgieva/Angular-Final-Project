import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseService } from './services/firebase.service';
import { environment } from 'src/environments/environment';

import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
}
