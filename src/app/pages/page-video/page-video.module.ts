import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageVideoPageRoutingModule } from './page-video-routing.module';

import { PageVideoPage } from './page-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageVideoPageRoutingModule
  ],
  declarations: [PageVideoPage]
})
export class PageVideoPageModule {}
