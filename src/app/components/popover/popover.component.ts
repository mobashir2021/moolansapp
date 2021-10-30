import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController, private storage: NativeStorage, private router: Router) { }

  ngOnInit() {}

  logout(){
    this.popoverController.dismiss();
    this.storage.clear();
    this.router.navigate(['login']);

  }

  updatepassword(){
    this.popoverController.dismiss();
    
    //this.router.navigate(['editsettings']);
  }

}
