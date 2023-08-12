import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
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
  

  constructor(public apiService: ApiService) {}
  
  ngOnInit(): void {

  }

  async onSubmit(form: any) {
    if (form.valid) {
      await this.apiService.createRecipe(this.currentUserId, form);
      alert('Cocktail is created!');
    }
  }
}
