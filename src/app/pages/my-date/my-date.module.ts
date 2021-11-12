import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDatePageRoutingModule } from './my-date-routing.module';

import { MyDatePage } from './my-date.page';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    FormsModule,
    IonicModule,
    MyDatePageRoutingModule
  ],
  declarations: [MyDatePage]
})
export class MyDatePageModule {}
