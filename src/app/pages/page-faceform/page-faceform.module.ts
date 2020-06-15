import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFaceformPageRoutingModule } from './page-faceform-routing.module';

import { PageFaceformPage } from './page-faceform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFaceformPageRoutingModule
  ],
  declarations: [PageFaceformPage]
})
export class PageFaceformPageModule {}
