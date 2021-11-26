import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  public recipes;
  public _recipes;
  public nameUser ;

  itemExpanded: boolean = false;
  itemExpandHeight: number = 250;

  constructor(public recipesPvr: RecipesService,
    public router: Router) { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('authorization'));
    if(data){
      this.nameUser = data.name;
    }else{
      this.nameUser = "Bienvenido usuario";
    }
    this.recipesPvr.getAllRecipes().subscribe(data =>{
      this.recipes = data;
      console.log('this.recipes',this.recipes);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  goToDetailRecipe(recipe){
    const data = JSON.stringify(recipe);
    this.router.navigate(['detail-recipe', data])
  /*   this.navCtrl.push(DetailRecipePage, {
      recipe:recipe
    }) */
  }
  
  expandedItem(recipe){
    console.log(recipe)
    this.itemExpanded = !this.itemExpanded;
  }
}
