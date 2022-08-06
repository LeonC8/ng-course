
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs'

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 5)];
    startedEditing = new Subject<number>;

    getIngredients() {
        return this.ingredients;
    }

    getIngredient(index:number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}