import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cozinhalegal.com.br/files/receitas/670/Molho-Bolonhesa-Simples-5.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
