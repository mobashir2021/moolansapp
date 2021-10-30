import { PopoverComponent } from './../../components/popover/popover.component';
import { HttpClient } from '@angular/common/http';
import { DataholdService } from './../../datahold.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HTTP } from "@ionic-native/http/ngx";
import { NavController, Platform, PopoverController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.page.html',
  styleUrls: ['./productlisting.page.scss'],
})
export class ProductlistingPage implements OnInit {

  result : any;
  ordersdata : any = [];
  apiUrl: string = 'http://moolans.azurewebsites.net/api/Backendapi/GetOrderList';
  custid : number = 0;

  constructor(private http: HttpClient, private router: Router, private dataservice : DataholdService,
    private navController: NavController, private plt: Platform, private toast: ToastController, private storage: NativeStorage) { 

      
    }

  ngOnInit() {
    this.plt.ready().then(() => {
        
        
      this.storage.getItem('user').then(
       (res) => {
         this.custid = res.Customerid;
         this.http.get(this.apiUrl, {params : {Customerid: this.custid.toString()}})
    .subscribe((res) => {
      this.ordersdata = res;
      
      console.log(this.ordersdata);
    });
         
       },
       err => console.log(err)
     );
     
     });
    
  }

}
