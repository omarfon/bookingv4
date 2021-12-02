import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CardCuidaPage } from './card-cuida.page';
import { CardCuidaPageRoutingModule } from './card-cuida-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardCuidaPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [CardCuidaPage]
})
export class CardCuidaPageModule {}
