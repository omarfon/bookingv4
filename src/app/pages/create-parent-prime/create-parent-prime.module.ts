import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CreateParentPrimePageRoutingModule } from './create-parent-prime-routing.module';

import { CreateParentPrimePage } from './create-parent-prime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateParentPrimePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateParentPrimePage]
})
export class CreateParentPrimePageModule {}
