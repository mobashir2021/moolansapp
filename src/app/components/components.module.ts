import { InputComponent } from './input/input.component';
import { LogotextComponent } from './logotext/logotext.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [SlidesComponent, LogoComponent, StartComponent, LogotextComponent, InputComponent],
  exports:[SlidesComponent, LogoComponent, StartComponent, LogotextComponent, InputComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
