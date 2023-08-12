import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {
  fetchedData: any;

  constructor(public apiService: ApiService,
    ) { }

  ngOnInit(): void {
    const currentUserId = getAuth().currentUser?.uid as string;
      this.apiService.getRecipesByAuthor(currentUserId).then(res => {
        this.fetchedData = Object.keys(res).map(key => ({
          id: key,
          ...res[key]
        }));
      })

    
    }
}


