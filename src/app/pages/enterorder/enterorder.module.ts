import { EnterOrderRouter } from './enterorder.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterorderPageRoutingModule } from './enterorder-routing.module';

import { EnterorderPage } from './enterorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterOrderRouter
  ],
  declarations: [EnterorderPage]
})
export class EnterorderPageModule {}
