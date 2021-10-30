import { PopoverComponent } from './../../components/popover/popover.component';
import { HttpClient } from '@angular/common/http';
import { DataholdService } from './../../datahold.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HTTP } from "@ionic-native/http/ngx";
import { NavController, Platform, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  selectedlocation: string = '';
  locations : any = [];
  filterlocation : any = [];
  apiUrl: string = 'http://moolans.azurewebsites.net/api/Backendapi/GetLocations';

  constructor(private http: HttpClient, private router: Router, private dataservice : DataholdService,
     private navController: NavController, private plt: Platform, private popoverController: PopoverController) { }

  ngOnInit() {

    this.plt.ready().then(() => {
      this.http.get(this.apiUrl, {})
      .subscribe((res) => {
        this.locations = res;
        
        console.log(this.locations);
      });
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{

      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  /* FilterLocation(ev: any){
    this.filterlocation = this.locations;
    const val = ev.target.value;
    if(val && val.trim() != ''){
      this.filterlocation = this.locations.filter((item) => {
        return (item.Location1.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  } */

  gotoNewOrder(){
    /* let navigationExtras: NavigationExtras = {
      queryParams: {
        location: this.selectedlocation
      }
    }; */

    // this.router.navigate(['enterorder'], navigationExtras);

    this.dataservice.setLocation(this.selectedlocation);
    this.navController.navigateForward('enterorder');
  }

}
