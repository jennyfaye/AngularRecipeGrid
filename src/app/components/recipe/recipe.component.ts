import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{
  recipeList: RecipeModel[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipe();
  }
}
