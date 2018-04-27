import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-dashboard-part',
  templateUrl: './dashboard-part.component.html',
  styleUrls: ['./dashboard-part.component.css']
})
export class DashboardPartComponent implements OnInit {
  
  orderInfo = {};
  productTypeInfo = {};
  productInfo = {};
  memberInfo = {};
  top5DataSource = {};
  apiUrl = 'http://192.168.0.105:8000/api/cms';

   id = 'chart1';
   width = 1500;
   height = 600;
   type = 'column2d';
   dataFormat = 'json';
   dataSource;
   title = 'Angular4 FusionCharts Sample';


  constructor(private router: Router, private http: Http) { } 

  ngOnInit() { 
  	this.http.get(this.apiUrl + "/order/get_order_count")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	this.orderInfo = res.data[0];
    })
    this.http.get(this.apiUrl + "/product/get_product_type_count")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	this.productTypeInfo = res.data[0];
    })
    this.http.get(this.apiUrl + "/product/get_product_count")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	this.productInfo = res.data[0];
    })
    this.http.get(this.apiUrl + "/member/get_cus_member_count")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	this.memberInfo = res.data[0];
    })

    this.http.get(this.apiUrl + "/product/get_top_5_orders_product")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	this.dataSource = {
		            "chart": {
		                "caption": "Top 5 Order Products",
		                "theme": "fint",
		                "outCnvBaseFont": "Arial",
		                "baseFontSize": "18",
		                "outCnvBaseFontColor": "#633563"
		            },

		            "data": res.data
       		}
  		
    })
}
