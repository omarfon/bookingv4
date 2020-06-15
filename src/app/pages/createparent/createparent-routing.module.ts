import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateparentPage } from './createparent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateparentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateparentPageRoutingModule {}
