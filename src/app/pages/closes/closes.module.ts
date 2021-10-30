import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosesPageRoutingModule } from './closes-routing.module';

import { ClosesPage } from './closes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosesPageRoutingModule
  ],
  declarations: [ClosesPage]
})
export class ClosesPageModule {}
