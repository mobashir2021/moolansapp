import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooselocationPageRoutingModule } from './chooselocation-routing.module';

import { ChooselocationPage } from './chooselocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooselocationPageRoutingModule
  ],
  declarations: [ChooselocationPage]
})
export class ChooselocationPageModule {}
