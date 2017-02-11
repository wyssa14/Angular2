import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [

    new Recipe('Lasagne', 'Very easy', 'http://static.chefkoch-cdn.de/ck.de/rezepte/111/111218/844294-960x720-lasagne-bolognese.jpg', []),
    new Recipe('Salad', 'Healthy' , 'https://www.wagamama.com/-/media/WagamamaMainsite/hero-pod-images/salads.jpg', []),
    new Recipe( 'Burger', 'Gains', 'http://smokeybones.com/wp-content/uploads/2015/11/loaded-bbq-burger.jpg', [])

  ];

  constructor() { }


  getRecipes(){

    return this.recipes;

  }



}
