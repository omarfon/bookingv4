import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    CardPageRoutingModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule
  ],
  declarations: [CardPage]
})
export class CardPageModule { }
