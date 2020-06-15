import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyparentsPageRoutingModule } from './myparents-routing.module';

import { MyparentsPage } from './myparents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyparentsPageRoutingModule
  ],
  declarations: [MyparentsPage]
})
export class MyparentsPageModule {}
