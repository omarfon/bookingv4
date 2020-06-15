import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendationsPageRoutingModule } from './recomendations-routing.module';

import { RecomendationsPage } from './recomendations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendationsPageRoutingModule
  ],
  declarations: [RecomendationsPage]
})
export class RecomendationsPageModule {}
