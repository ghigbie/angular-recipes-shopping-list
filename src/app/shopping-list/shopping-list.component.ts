import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Basel', 3),
    new Ingredient('Cilantro', 5),
    new Ingredient('Dates', 12),
  ];

  constructor() {}

  ngOnInit(): void {}
}
