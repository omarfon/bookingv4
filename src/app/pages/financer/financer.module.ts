import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancerPageRoutingModule } from './financer-routing.module';

import { FinancerPage } from './financer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancerPageRoutingModule
  ],
  declarations: [FinancerPage]
})
export class FinancerPageModule {}
