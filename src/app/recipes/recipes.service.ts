import { EventEmitter, Injectable } from '@angular/core';

import { Recipe }  from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipesService {
selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
  new Recipe('Fufu',
  'Pounded yam and vegetable soup',
  'https://c1.staticflickr.com/3/2045/2631717302_79eb17d896_b.jpg',
    [
      new Ingredient('Pounded Yam', 1),
      new Ingredient('Vegetable Soup', 1)
    ]),
new Recipe(
  'Fufu ohhh',
'Pounded yam and vegetable soup',
'https://c1.staticflickr.com/3/2045/2631717302_79eb17d896_b.jpg',
[
  new Ingredient('Pounded Yam', 1),
  new Ingredient('Vegetable Soup', 1)
]
),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }


}
