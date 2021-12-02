import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePage } from './recipe.page';
import { RecipePageRoutingModule } from './recipe-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePageRoutingModule,
    MatExpansionModule
  ],
  declarations: [RecipePage]
})
export class RecipePageModule {}
