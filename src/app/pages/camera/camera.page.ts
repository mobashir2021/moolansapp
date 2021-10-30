import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { File } from "@ionic-native/file/ngx";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { DataholdService } from './../../datahold.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HTTP } from "@ionic-native/http/ngx";
import { NavController, Platform, ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  custid: number = 0;

  base64Image : any;
  photos: any = [];
  location: string = '';
  croppedImagepath = "";
  isLoading = false;

  apiUrl: string = 'http://moolans.azurewebsites.net/api/Backendapi/GetOrderPhoto';

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(private camera: Camera,public actionSheetController: ActionSheetController, private dataservice : DataholdService,
    private file: File,private http: HttpClient, private router: Router, private toast: ToastController, private plt: Platform,
    private storage: NativeStorage) {
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

  takePhoto() {
    const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 600,
        targetHeight: 600,
        saveToPhotoAlbum: false
    };
    
    this.camera.getPicture(options).then(
        imageData => {
          
          this.base64Image = "data:image/jpeg;base64," + imageData;
          this.photos.push(this.base64Image);
          this.photos.reverse();
          //this.sendData(imageData);


         




       },
       err => {
         alert(err);
       }
    );
    }


    /* sendData(imageData) {
      this.userData.imageB64 = imageData;
      this.userData.user_id = "1";
      this.userData.token = "222";
      console.log(this.userData);
      this.authService.postData(this.userData, "userImage").then(
      result => {
        this.responseData = result;
      },
      err => {
      // Error log
    }
  );
  } */

  

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      //this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
      
      this.croppedImagepath =  imageData;
      var formdata = new FormData();
      formdata.append("base64image", this.croppedImagepath);
      formdata.append("location", this.location);
      formdata.append("Customerid", this.custid.toString());
      
      this.http.post(this.apiUrl, formdata).subscribe(res =>{
           
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
  err => { alert(JSON.stringify(err));}
  );
    }, (err) => {
      alert(JSON.stringify(err));
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

    

}
