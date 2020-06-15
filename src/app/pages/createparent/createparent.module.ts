import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateparentPageRoutingModule } from './createparent-routing.module';

import { CreateparentPage } from './createparent.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateparentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateparentPage]
})
export class CreateparentPageModule {}
