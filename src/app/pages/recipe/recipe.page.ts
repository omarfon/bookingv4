import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  itemExpanded: boolean = false;
  itemExpandHeight: number = 250;
  public recipe;
  public _recipes;

  constructor(
    public recipesPvr: RecipesService,
    public router: Router,
    public routes: ActivatedRoute) { }

  ngOnInit() {
    let data = this.routes.snapshot.paramMap.get('datos');
    this._recipes = JSON.parse(data);
    if (this._recipes) {
      this.recipe = this._recipes;
      console.log('task en ', this.recipe);
    }
  }


}
