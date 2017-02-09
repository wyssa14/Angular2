import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe('Lasagne', 'Very easy', 'http://static.chefkoch-cdn.de/ck.de/rezepte/111/111218/844294-960x720-lasagne-bolognese.jpg', []),
    new Recipe('Salad', 'Healthy' , 'https://www.wagamama.com/-/media/WagamamaMainsite/hero-pod-images/salads.jpg', [])

  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }


  onSelected(recipe: Recipe) {

    this.recipeSelected.emit(recipe);

  }

}
