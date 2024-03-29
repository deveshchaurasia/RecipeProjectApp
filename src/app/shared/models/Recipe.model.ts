import { Ingredient } from "./ingredient.model";

export class Recipe{
    public id:number;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];

    constructor(id:number,name:string, desc:string, imagePath:string, Ingredients: Ingredient[]){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = Ingredients;
    }
}