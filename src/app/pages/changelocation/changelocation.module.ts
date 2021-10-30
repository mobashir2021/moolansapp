import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangelocationPageRoutingModule } from './changelocation-routing.module';

import { ChangelocationPage } from './changelocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangelocationPageRoutingModule
  ],
  declarations: [ChangelocationPage]
})
export class ChangelocationPageModule {}
