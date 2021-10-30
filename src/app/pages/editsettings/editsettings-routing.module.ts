import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditsettingsPage } from './editsettings.page';

const routes: Routes = [
  {
    path: '',
    component: EditsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditsettingsPageRoutingModule {}
