import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-modify-product-part',
  templateUrl: './modify-product-part.component.html',
  styleUrls: ['./modify-product-part.component.css']
})
export class ModifyProductPartComponent implements OnInit {
  
  add_action = false;
  apiUrl = 'http://192.168.0.105:8000/api/cms/product/';
  imageUrl = 'http://192.168.0.105:8000/storage/photos/';
  productInfo = { name : "" , price : "" , product_desc: "", product_standard: "", qty: "", weight: "", active: 1 , product_type: 1};
  productTypeId;
  album_no = 0;

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() { 
  	this.route.queryParams
	    .filter(params => params.action)
	    .subscribe(params => { 
		  	var id = params.id;
		  	var action = params.action;
        this.productTypeId = params.type_id;

		  	if(action == "add"){
		  		this.add_action = true;
		  	} else if(action == "edit"){
		        this.http.get(this.apiUrl + "get_product_by_id?id=" + id)
		        .map((response) => response.json())
		        //.subscribe == .then
		        .subscribe((res) => { 
		            console.log(res.data);
		            this.productInfo = res.data[0];
		        });        
	    	}
	  });
	}

  addProduct(event) {
    //check active toggle 
    if ((document.getElementById("active")).checked){
      this.productInfo.active = 1;
    } else {
      this.productInfo.active = 0;
    }

    if (this.productInfo.name == "" || this.productInfo.price == "" || this.productInfo.product_desc == "" || this.productInfo.product_standard == "" || this.productInfo.qty == "" || this.productInfo.weight == "") {
       return document.getElementsByClassName("alert-danger")[0].style.display =  "block";
    }

    this.productInfo.product_type = this.productTypeId;

    this.http.post(this.apiUrl + "insert_product", this.productInfo)
    .map((response) => response.json())
    .subscribe((res) => {
      if(res.response_code == "200"){
        document.getElementsByClassName("alert-success")[0].style.display =  "block";
        window.location.href = '/product-part?id=' + this.productInfo.id;

      } else {
        document.getElementsByClassName("alert-danger")[0].style.display =  "block";
      }
    })
  }

  updateProduct(event){
    //check active toggle 
    if ((document.getElementById("active")).checked){
      this.productInfo.active = 1;
    } else {
      this.productInfo.active = 0;
    }

    if (this.productInfo.name == "" || this.productInfo.price == "" || this.productInfo.product_desc == "" || this.productInfo.product_standard == "" || this.productInfo.qty == "" || this.productInfo.weight == "") {
       return document.getElementsByClassName("alert-danger")[0].style.display =  "block";
    }

    this.http.post(this.apiUrl + "update_product", this.productInfo)
    .map((response) => response.json())
    .subscribe((res) => {
      if(res.response_code == "200"){
        document.getElementsByClassName("alert-success")[0].style.display =  "block";
        window.location.reload()

      } else {
        document.getElementsByClassName("alert-danger")[0].style.display =  "block";
      }
    })
  }

  uploadLogo($event) {
    (document.getElementById('cover_image_upload')).click();
  }

  onChangeUploadLogo() {
    (document.getElementById('upload_cover_image_form')).submit();
  }


  uploadAlbum1($event) {
    this.album_no = 1;
    (document.getElementById('album_image_upload_1')).click();
  }
  
  uploadAlbum2($event) {
    this.album_no = 2;
    (document.getElementById('album_image_upload_2')).click();
  }
  
  uploadAlbum3($event) {
    this.album_no = 3;
    (document.getElementById('album_image_upload_3')).click();
  }

  onChangeUploadAlbum() {
    (document.getElementById('upload_album_form')).submit();
  }
}
