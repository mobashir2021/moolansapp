import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataholdService {

  locationObj : string = '';
  constructor() { }

  getLocation(){
    return this.locationObj;
  }

  setLocation(locObj){
    this.locationObj = locObj;
  }
}
