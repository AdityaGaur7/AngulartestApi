import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    this.http.get<any>('https://dummyjson.com/recipes').subscribe(data => {
      this.recipes = data.recipes;
    });
  }
}
