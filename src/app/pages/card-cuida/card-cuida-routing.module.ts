import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardCuidaPage } from './card-cuida.page';


const routes: Routes = [
  {
    path: '',
    component: CardCuidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardCuidaPageRoutingModule {}
