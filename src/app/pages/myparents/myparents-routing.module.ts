import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyparentsPage } from './myparents.page';

const routes: Routes = [
  {
    path: '',
    component: MyparentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyparentsPageRoutingModule {}
