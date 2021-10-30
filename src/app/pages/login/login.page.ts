import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  result: string = '';
  userphone: string;
  password: string;
  @Input() type: string;
  @Input() placeholder: string;
  apiUrl: string = 'http://moolans.azurewebsites.net/api/Backendapi/Getlogin';
  constructor(private router: Router, private httpclient: HttpClient, private toast: ToastController,
    private storage: NativeStorage) { 

  }

  ngOnInit() {
  }

  loginclick(){
    



    if(this.userphone === undefined || this.userphone == ""){
      
      let toast =  this.toast.create({
        message: 'Enter Mobileno',
        duration: 2000,
        position: 'bottom',
        color: 'medium'
      }).then(
        (obj) => obj.present()
      );
      
      return;
    }
    if(this.password === undefined || this.password == ""){
      let toast =  this.toast.create({
        message: 'Enter Password',
        duration: 2000,
        position: 'bottom'
      }).then(
        (obj) => obj.present()
      );
      return;
    }


    this.httpclient.get(this.apiUrl, { params: { username: this.userphone, password: this.password}}).subscribe(res =>{
      
      var itemstest = JSON.stringify(res);
      
         var results = JSON.parse(itemstest);
         
         
          if(results.Customerid.toString() != '-1'){
            
            this.storage.setItem('user', {
              mobileno : this.userphone,
              password : this.password,
              Customerid : results.Customerid
            }).then(
              (res) => {

              },
              err =>{

              }
            );

            let toast = this.toast.create({
              message: 'Login successful',
              duration: 2000,
              position: 'bottom',
              color: 'medium'
            }).then((obj) => {
              obj.present();
              this.router.navigate(['home']);
            });

          }else{
            let toast = this.toast.create({
              message: 'Login failed',
              duration: 2000,
              position: 'bottom',
              color: 'medium'
            }).then((obj) => {
              obj.present();
              
            });
          }
    },
    err => { console.log(err);}
    );
    
  }

  presentToast() {
    let toast = this.toast.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    }).then((obj) => {
      obj.present();
    });
  
    
  }

}
