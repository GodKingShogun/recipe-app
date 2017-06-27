import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredientsFaux: Ingredient[] = [
  new Ingredient("tomatoes", 4),
  new Ingredient("onions", 5)
  ];


    getIngredients() {
      return this.ingredientsFaux.slice();
    }

    addIngredient(ingredient: Ingredient) {
      this.ingredientsFaux.push(ingredient);
      this.ingredientsChanged.emit(this.ingredientsFaux.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients) {
      //   this.addIngredient(ingredient);
      // }
      this.ingredientsFaux.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredientsFaux.slice());
    }
}
