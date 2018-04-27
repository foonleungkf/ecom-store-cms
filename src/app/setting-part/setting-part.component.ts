import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-setting-part',
  templateUrl: './setting-part.component.html',
  styleUrls: ['./setting-part.component.css']
})
export class SettingPartComponent implements OnInit {
  
  shopInfo = { };
  shopLogo = "";
  apiUrl = 'http://192.168.0.105:8000/api/cms/shop/';
  imageUrl = 'http://192.168.0.105:8000/storage/photos/'

  constructor(private http: Http) { }

  uploadLogo($event) {
  	document.getElementById('logo_upload').click();
  }

  onChangeUploadLogo() {
      document.getElementById('upload_logo_form').submit();
  }

  updateProfile(event) {

    console.log(this.shopInfo);
  	this.http.post(this.apiUrl + "update_shop", this.shopInfo)
    .map((response) => response.json())
  	.subscribe((res) => {
  		if(res.response_code == "200"){
        document.getElementsByClassName("alert-success")[0].style.display =  "block";
        window.location.reload();

      } else {
        document.getElementsByClassName("alert-danger")[0].style.display =  "block";
      }
  	})
  }

  ngOnInit() { 
  	this.http.get(this.apiUrl + "get_shop?id=1")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	console.log(res.data);
            	this.shopInfo = res.data[0];
            	console.log(this.shopInfo)
            })
	}
}
