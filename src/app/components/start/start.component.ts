import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private storage: NativeStorage) { }

  ngOnInit() {}

  navigatetoLogin(){
    this.storage.getItem('user')
      .then(
        res => {
          this.router.navigate(['home']);
        },
        err => {
          this.router.navigate(['login']);
        }
      );   
    

  }

}
