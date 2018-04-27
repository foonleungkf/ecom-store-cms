import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  shopInfo = { };
  apiUrl = 'http://192.168.0.105:8000/api/cms/shop/';
  imageUrl = 'http://192.168.0.105:8000/storage/photos/'

  constructor(private router: Router, private http: Http) { 


  }

  ngOnInit() { 
  	this.http.get(this.apiUrl + "get_shop?id=1")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	console.log(res.data);
            	this.shopInfo = res.data[0];
            	console.log(this.shopInfo)
               var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
               link.type = 'image/jpg';
               link.rel = 'shortcut icon';
               link.href = this.imageUrl + this.shopInfo.shop_logo;
               document.getElementsByTagName('head')[0].appendChild(link);
            })
	}

  moveToDashboard(){
  	this.removeActive();
  	document.getElementById("dashboard-part").classList.add('active');
  	this.router.navigate(['/dashboard-part']);
  }

  moveToShopSetting(){
  	this.removeActive();
  	document.getElementById("setting-part").classList.add('active');
  	this.router.navigate(['/setting-part']);
  }

  moveToOrder(){
  	this.removeActive();
  	document.getElementById("order-part").classList.add('active');
  	this.router.navigate(['/order-part']);
  }

  moveToProductType(id){
  	this.removeActive();
  	document.getElementById("product-type-part").classList.add('active');
  	this.router.navigate(['/product-type-part']);
  }

  moveToPayment(id){
  	this.removeActive();
  	document.getElementById("payment-part").classList.add('active');
  	this.router.navigate(['/payment-part']);
  }

  moveToMember(id){
  	this.removeActive();
  	document.getElementById("member-part").classList.add('active');
  	this.router.navigate(['/member-part']);
  }

  removeActive(){
  	document.getElementById("member-part").classList.remove('active');
  	document.getElementById("payment-part").classList.remove('active');
  	document.getElementById("product-type-part").classList.remove('active');
  	document.getElementById("order-part").classList.remove('active');
  	document.getElementById("setting-part").classList.remove('active');
  	document.getElementById("dashboard-part").classList.remove('active');
  }
}
