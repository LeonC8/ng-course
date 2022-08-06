import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>;

    /* private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
                    'Just awesome.', 
                    'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries', 20)
                    ]),

        new Recipe('Big Fat Burger', 
                    'What else?', 
                    'https://podravkaiovariations.azureedge.net/d368568c-63b8-11eb-a5ab-0242ac12003b/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.jpeg',
                    [
                        new Ingredient('Buns', 2),
                        new Ingredient('Meat', 1)
                    ])
      ]; */

private recipes: Recipe[] = [];
    
getRecipes() {
    return this.recipes.slice();
}

getRecipe(id: number) {
    return this.recipes[id];
}

setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
}

addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
}

updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
}

deleteRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
}


}