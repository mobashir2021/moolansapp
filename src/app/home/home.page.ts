import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  exitapp(){
    this.platform.backButton.subscribeWithPriority(999999, () => { 
      navigator['app'].exitApp();
      // or trigger any action you want to achieve
      }) //Amended missing a closing bracket
  }

}
