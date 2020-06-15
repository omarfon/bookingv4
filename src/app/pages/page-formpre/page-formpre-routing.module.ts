import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFormprePage } from './page-formpre.page';

const routes: Routes = [
  {
    path: '',
    component: PageFormprePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFormprePageRoutingModule {}
