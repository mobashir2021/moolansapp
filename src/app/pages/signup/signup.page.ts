import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  result: string = '';
  name: string;
  mobileno: string;
  password: string;
  apiUrl: string = 'http://moolans.azurewebsites.net/api/Backendapi/RegisterCustomer';

  constructor(private router: Router, private httpclient: HttpClient, private toast: ToastController,
    private storage: NativeStorage) {


   }

  ngOnInit() {
  }

  register(){
    if(this.mobileno == ""){
      let toast = this.toast.create({
        message: 'Enter Mobileno',
        duration: 2000,
        position: 'bottom',
              color: 'medium'
      }).then((obj) => {
        obj.present();
        
      });
      return;
    }
    if(this.password == ""){
      let toast = this.toast.create({
        message: 'Enter Password',
        duration: 2000,
        position: 'bottom',
              color: 'medium'
      }).then((obj) => {
        obj.present();
        
      });
      return;
    }



    this.httpclient.get(this.apiUrl, { params: { name: this.name, mobileno: this.mobileno, password: this.password}}).subscribe(res =>{
      var itemstest = JSON.stringify(res);
          this.result = JSON.parse(itemstest);
          if(this.result == "Registered Successfully"){
            this.storage.setItem('user', {
              mobileno : this.mobileno,
              password : this.password
            }).then(
              (res) => {

              },
              err =>{

              }
            );


            let toast = this.toast.create({
              message: 'Registration successful',
              duration: 2000,
              position: 'bottom',
              color: 'medium'
            }).then((obj) => {
              obj.present();
              this.router.navigate(['home']);
            });

          }else if(this.result == "Mobile no already exists"){
            let toast = this.toast.create({
              message: 'Mobile no already exists',
              duration: 3000,
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


}
