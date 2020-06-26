import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeleconPageRoutingModule } from './telecon-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';

import { TeleconPage } from './telecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeleconPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [TeleconPage]
})
export class TeleconPageModule {}
