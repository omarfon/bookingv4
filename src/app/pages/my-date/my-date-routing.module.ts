import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDatePage } from './my-date.page';

const routes: Routes = [
  {
    path: '',
    component: MyDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDatePageRoutingModule {}
