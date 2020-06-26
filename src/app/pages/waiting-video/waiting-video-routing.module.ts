import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingVideoPage } from './waiting-video.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingVideoPageRoutingModule {}
