import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/Recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe("Momos Recipe", 'Make the dough. Take 1 cup all-purpose flour, ¼ teaspoon salt and ½ teaspoon oil in a bowl. Mix well with a spoon.', 
        'https://c.ndtvimg.com/2022-07/9f0la2fg_veg-momo_625x300_06_July_22.png', [new Ingredient("cauliflower", 6), new Ingredient("onion",12)]),
        new Recipe('Pizza Recipe', `There are some toppings that should be cooked first before topping a pizza
        because they won’t cook fully before the pizza is done cooking. Raw meat should be fully cooked
        before adding it as a topping. Any vegetables that you don’t want to be raw on the cooked pizza
        such as onions, peppers, broccoli, or mushrooms should be sautéed first.`, 
        `https://www.simplyrecipes.com/thmb/CWzxvl8dpC_zkjjRqEE6fBCS6DQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg`,
        [new Ingredient("tomato", 24), new Ingredient("onion",23)]),
        new Recipe('Gol Gappa Recipe', `Take ⅓ cup loosely packed fresh mint leaves in a small grinder jar. Only use
        the mint leaves. Do not add the stems as then the pani can become bitter. Rinse the mint leaves
        well with water before adding them in the grinder jar.`, `https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/golgappa-recipe.jpg`, 
        [new Ingredient("pudina", 8), new Ingredient("lemon",5)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}


