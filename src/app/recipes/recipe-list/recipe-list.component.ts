import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'Delicious food',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg?20120913150547'
    ),
    new Recipe(
      'A Test Recipe2',
      'Delicious food',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg?20120913150547'
    ),
    new Recipe(
      'A Test Recipe3',
      'Delicious food',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg?20120913150547'
    ),
    new Recipe(
      'A Test Recipe4',
      'Delicious food',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg?20120913150547'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
