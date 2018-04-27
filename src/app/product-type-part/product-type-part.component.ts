import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-type-part',
  templateUrl: './product-type-part.component.html',
  styleUrls: ['./product-type-part.component.css']
})
export class ProductTypePartComponent implements OnInit {
  
  productTypeList = [];
  apiUrl = 'http://192.168.0.105:8000/api/cms/product/';

  constructor(private router: Router, private http: Http) { }

  ngOnInit() { 
  	this.http.get(this.apiUrl + "get_product_type_list")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	console.log(res.data);
            	this.productTypeList = res.data;
            })
  }

  moveToAddProductType() {
  	//move to product type with add action
  	this.router.navigate(['/modify-product-type-part'], { queryParams: { action: 'add' } });
  }

  moveToAddProductTypeById(id) {
    //move to product type with edit action
    this.router.navigate(['/modify-product-type-part'], { queryParams: { action: 'edit', id: id } });
  }

  moveToProductList(id) {
    //move to product type with edit action
    this.router.navigate(['/product-part'], { queryParams: { id: id } });
  }

  removeProductType(id) {
    this.http.post(this.apiUrl + "delete_product_type_by_id", {"id": id})
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
}
