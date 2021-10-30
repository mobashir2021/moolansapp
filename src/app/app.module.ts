
import { DataholdService } from './datahold.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HTTP } from "@ionic-native/http/ngx";
//import { IonicStorageModule } from '@ionic/storage';
import { Camera, CameraOptions  } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from "../app/components/popover/popover.component";



@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HTTP, DataholdService, File, WebView, Camera, NativeStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
