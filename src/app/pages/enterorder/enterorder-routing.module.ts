import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterorderPage } from './enterorder.page';

const routes: Routes = [
  {
    path: '',
    component: EnterorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterorderPageRoutingModule {}
