import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{
  currentUserId = getAuth().currentUser?.uid as string;
  recipe = {
    name: '',
    category: '',
    garnish: '',
    glass: '',
    imageUrl: '',
    ingredients: '',
    preparation: '',
  }
  

  constructor(public apiService: ApiService, public router: Router) {}

  async onSubmit(form: any) {
    if (form.valid) {
      try {
        await this.apiService.createRecipe(this.currentUserId, form);
        this.router.navigate(['/home']);
      } catch (error) {
        alert(`Error: ${error}`)
      }
    }
  }
}
