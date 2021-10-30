import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditsettingsPageRoutingModule } from './editsettings-routing.module';

import { EditsettingsPage } from './editsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditsettingsPageRoutingModule
  ],
  declarations: [EditsettingsPage]
})
export class EditsettingsPageModule {}
