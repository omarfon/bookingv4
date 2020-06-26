import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingVideoPageRoutingModule } from './waiting-video-routing.module';

import { WaitingVideoPage } from './waiting-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingVideoPageRoutingModule
  ],
  declarations: [WaitingVideoPage]
})
export class WaitingVideoPageModule {}
