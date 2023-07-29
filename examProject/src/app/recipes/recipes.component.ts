import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  fetchedData: any;
  
  constructor(public apiService: ApiService) { }


  ngOnInit(): void {
   this.apiService.getRecipes().then(res => {
      this.fetchedData = res
   })
  }
}
