import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooselocationPage } from './chooselocation.page';

const routes: Routes = [
  {
    path: '',
    component: ChooselocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooselocationPageRoutingModule {}
