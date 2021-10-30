import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductlistingPageRoutingModule } from './productlisting-routing.module';

import { ProductlistingPage } from './productlisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductlistingPageRoutingModule
  ],
  declarations: [ProductlistingPage]
})
export class ProductlistingPageModule {}
