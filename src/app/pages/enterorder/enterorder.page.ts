import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataholdService } from 'src/app/datahold.service';

@Component({
  selector: 'app-enterorder',
  templateUrl: './enterorder.page.html',
  styleUrls: ['./enterorder.page.scss'],
})
export class EnterorderPage implements OnInit {

  data: any;
  location: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private dataservice: DataholdService, private navController: NavController) { 
    /* this.route.queryParams.subscribe(params => {
      if (params && params.location) {
        this.data = params.location;
        alert(this.data);
      }
    }); */

    this.location = this.dataservice.getLocation(); 
    
  }

  ngOnInit() {
  }

  goPrevious(){
    this.navController.back();
  }

}
