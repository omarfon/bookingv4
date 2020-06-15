import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancerPage } from './financer.page';

const routes: Routes = [
  {
    path: '',
    component: FinancerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancerPageRoutingModule {}
