import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipeToDisplay: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipeToDisplay.ingredients);
  }

}
