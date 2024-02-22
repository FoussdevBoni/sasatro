import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayementsPage } from './payements.page';

const routes: Routes = [
  {
    path: '',
    component: PayementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayementsPageRoutingModule {}
