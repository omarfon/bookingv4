import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  itemExpanded: boolean = false;
  itemExpandHeight: number = 250;

  constructor(
              public recipesPvr: RecipesService,
              public router: Router) { }

  ngOnInit() {


  }



}
