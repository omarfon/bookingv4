import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateParentPrimePage } from './create-parent-prime.page';

const routes: Routes = [
  {
    path: '',
    component: CreateParentPrimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateParentPrimePageRoutingModule {}
