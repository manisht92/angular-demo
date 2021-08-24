import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test recipe","This is simple test",""),
    new Recipe("Test recipe1","This is simple test2",""),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
