import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFormprePageRoutingModule } from './page-formpre-routing.module';

import { PageFormprePage } from './page-formpre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFormprePageRoutingModule
  ],
  declarations: [PageFormprePage]
})
export class PageFormprePageModule {}
