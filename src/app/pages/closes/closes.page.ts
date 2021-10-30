import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-closes',
  templateUrl: './closes.page.html',
  styleUrls: ['./closes.page.scss'],
})
export class ClosesPage implements OnInit {

  constructor(private platform: Platform) {


   }

  ngOnInit() {
    this.platform.ready().then(() => {
      
        navigator['app'].exitApp();
        // or trigger any action you want to achieve
        
    });
  }

}
