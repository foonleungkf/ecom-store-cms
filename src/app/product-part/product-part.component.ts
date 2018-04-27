import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-product-part',
  templateUrl: './product-part.component.html',
  styleUrls: ['./product-part.component.css']
})
export class ProductPartComponent implements OnInit {

   productList = [];
   productTypeId;
   apiUrl = 'http://192.168.0.105:8000/api/cms/product/';
   imageUrl = 'http://192.168.0.105:8000/storage/photos/';

  constructor(private route: ActivatedRoute, private http: Http, private router: Router) { }

  ngOnInit() { 
  	this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        var id = params.id;
        this.productTypeId = params.id;
        this.http.get(this.apiUrl + "get_product_by_type?product_type=" + id)
        .map((response) => response.json())
        //.subscribe == .then
        .subscribe((res) => { 
            console.log(res.data);
            this.productList = res.data;
         })        
    });
  }

  moveToAddProduct() {
    //move to product type with add action
    this.router.navigate(['/modify-product-part'], { queryParams: { action: 'add' , type_id: this.productTypeId} });
  }

  moveToUpdateProductById(id) {
    //move to product type with add action
    this.router.navigate(['/modify-product-part'], { queryParams: { action: 'edit', id: id } });
  }

  removeProduct() {

    var product_cb = document.getElementsByClassName('product_cb');
    var product_id_array = []
    for (var i = 0; i < product_cb.length; i++){
        if (document.getElementById(product_cb[i].value).checked){
          product_id_array.push(product_cb[i].value)
        } 
    }

    var id = product_id_array.join(",");
    this.http.post(this.apiUrl + "delete_product_by_id_arary", {"id": id})
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
