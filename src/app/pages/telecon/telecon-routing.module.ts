import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeleconPage } from './telecon.page';

const routes: Routes = [
  {
    path: '',
    component: TeleconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeleconPageRoutingModule {}
