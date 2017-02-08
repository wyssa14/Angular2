import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy Recipe', 'This is a custom dummy recipe!', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hotdog.PNG/220px-Hotdog.PNG');

  constructor() {
  }

  ngOnInit() {
  }


  onSelected(recipe: Recipe) {

    this.recipeSelected.emit(recipe);


  }

}
