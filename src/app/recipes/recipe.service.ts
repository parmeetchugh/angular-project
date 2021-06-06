import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged= new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe("Red Meat", " Meat with fries with demo description!",
        "https://www.simplyrecipes.com/wp-content/uploads/2010/08/stir-fry-ginger-beef-horiz-a-1600.jpg",
            [
                new Ingredient('Meat', 1),
                new Ingredient('french Fries', 10),

            ]),
        new Recipe("Bean Burger",
         " burger and demo description!",
         "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F07%2F27%2Fbison-mushroom-burger.jpeg&w=600&h=402&c=sc&poi=face&q=85",
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),

            ])
    ];

    //private recipes: Recipe[] =[];
    constructor(private slService: ShoppingListService) {

    }

    setRecipies(recipes:Recipe[])
    {
        this.recipes= recipes;
        this.recipesChanged.next(this.recipes.slice());

    }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id:number) {
        return this.recipes.slice()[id];
    }


    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

    }


    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());


    }

}
