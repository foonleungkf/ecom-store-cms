import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-modify-product-type-part',
  templateUrl: './modify-product-type-part.component.html',
  styleUrls: ['./modify-product-type-part.component.css']
})
export class ModifyProductTypePartComponent implements OnInit {
  
  add_action = false;
  productTypeInfo = { active: 1 , type_name: "", type_desc: ""};
  apiUrl = 'http://192.168.0.105:8000/api/cms/product/';

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
  	this.route.queryParams
      .filter(params => params.action)
      .subscribe(params => {
      	console.log(params.action)
      	var action = params.action;
        var id = params.id;

      	if(action == "add"){
      		this.add_action = true
      	} else if (action == "edit"){
          this.http.get(this.apiUrl + "get_product_type_by_id?id=" + id)
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
              console.log(res.data);
              this.productTypeInfo = res.data[0];
            })
        }
    });
  }

  updateProductType(event) {
    //check active toggle 
    if ((document.getElementById("active")).checked){
      this.productTypeInfo.active = 1;
    } else {
      this.productTypeInfo.active = 0;
    }

    if (this.productTypeInfo.type_name == "" || this.productTypeInfo.type_desc == "") {
       return document.getElementsByClassName("alert-danger")[0].style.display =  "block";
    }

    this.http.post(this.apiUrl + "update_product_type", this.productTypeInfo)
    .map((response) => response.json())
    .subscribe((res) => {
      if(res.response_code == "200"){
        document.getElementsByClassName("alert-success")[0].style.display =  "block";
        window.location.href = '/product-type-part';

      } else {
        document.getElementsByClassName("alert-danger")[0].style.display =  "block";
      }
    })
  }

  addProductType(event) {
    //check active toggle 
    if (document.getElementById("active").checked){
      this.productTypeInfo.active = 1;
    } else {
      this.productTypeInfo.active = 0;
    }
    
    console.log(this.productTypeInfo);

    if (this.productTypeInfo.type_name == "" || this.productTypeInfo.type_desc == "") {
       return document.getElementsByClassName("alert-danger")[0].style.display =  "block";
    }

    this.http.post(this.apiUrl + "insert_product_type", this.productTypeInfo)
    .map((response) => response.json())
    .subscribe((res) => {
      if(res.response_code == "200"){
        document.getElementsByClassName("alert-success")[0].style.display =  "block";
        window.location.href = '/product-type-part';

      } else {
        document.getElementsByClassName("alert-danger")[0].style.display =  "block";
      }
    })
  }
}
