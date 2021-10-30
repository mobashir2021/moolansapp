import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangelocationPage } from './changelocation.page';

const routes: Routes = [
  {
    path: '',
    component: ChangelocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangelocationPageRoutingModule {}
