import { HttpClient } from '@angular/common/http';
import { DataholdService } from './../../datahold.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HTTP } from "@ionic-native/http/ngx";
import { NavController, Platform, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  result : any;
  ordersdata : string;
  apiUrl: string = 'http://moolans.azurewebsites.net/api/Backendapi/GetOrder';
  custid : number = 0;
  location: string = '';

  constructor(private http: HttpClient, private router: Router, private dataservice : DataholdService,
    private navController: NavController, private plt: Platform, private toast: ToastController, private storage: NativeStorage) { 

      this.plt.ready().then(() => {

       this.location = dataservice.getLocation();
       this.storage.getItem('user').then(
        (res) => {
          this.custid = res.Customerid
        },
        err => console.log(err)
      );
      });
    }

  ngOnInit() {

  }



  placeOrder(){

    if(this.ordersdata === undefined || this.ordersdata == ""){
      let toast =  this.toast.create({
        message: 'Enter Orders',
        duration: 3000,
        position: 'bottom',
        color: 'medium'
      }).then(
        (obj) => obj.present()
      );
      
      return;
    }

    this.http.get(this.apiUrl, { params: { Customerid: this.custid.toString(), location : this.location, ordertext: this.ordersdata}}).subscribe(res =>{
      var itemstest = JSON.stringify(res);
          this.result = JSON.parse(itemstest);
          let toast =  this.toast.create({
            message: 'Order placed Successfully!',
            duration: 3000,
            position: 'middle'
          }).then(
            (obj) => {
              obj.present();
              this.router.navigate(['home']);
            } 
          );
          
    },
    err => { console.log(err);}
    );
    
  }

}
