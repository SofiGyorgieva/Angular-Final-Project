import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
  item: any;

  constructor(
    public dialogRef: MatDialogRef<RecipeDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.item = Object.values(data?.item)[0];
  }
  
  ngOnInit(): void {
  }

}
