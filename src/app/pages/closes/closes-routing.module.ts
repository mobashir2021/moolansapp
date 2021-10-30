import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosesPage } from './closes.page';

const routes: Routes = [
  {
    path: '',
    component: ClosesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosesPageRoutingModule {}
