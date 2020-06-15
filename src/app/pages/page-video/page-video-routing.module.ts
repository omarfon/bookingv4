import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageVideoPage } from './page-video.page';

const routes: Routes = [
  {
    path: '',
    component: PageVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageVideoPageRoutingModule {}
