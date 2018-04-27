import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-order-detail-part',
  templateUrl: './order-detail-part.component.html',
  styleUrls: ['./order-detail-part.component.css']
})
export class OrderDetailPartComponent implements OnInit {
  
  orderDetail = {};
  total = 0;
  orderItemDetail = [];
  apiUrl = 'http://192.168.0.105:8000/api/cms/order/';


  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
  	this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        var id = params.id;
        this.http.get(this.apiUrl + "get_order_list_by_id?order_list_id=" + id)
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
              console.log(res.data);
              this.orderDetail = res.data[0];
              console.log(res.data[0]);
            })

        this.http.get(this.apiUrl + "get_order_item_by_id?order_list_id=" + id)
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
              this.orderItemDetail = res.data;
              for (var i = 0; i< res.data.length; i++){
                this.total += res.data[i].item_total;
              }
            })
    });
  }

  updatePaymentStatus(event){
    var e = document.getElementById("payment_status");  
    this.orderDetail.payment_status = e.options[e.selectedIndex].value;

    this.http.post(this.apiUrl + "update_payment_status", this.orderDetail)
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

  updateOrderStatus(event){
    var e = document.getElementById("order_status"); 
    this.orderDetail.order_status = e.options[e.selectedIndex].value;

    this.http.post(this.apiUrl + "update_order_status", this.orderDetail)
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

  updateDeliveryStatus(event){
    var e = document.getElementById("delivery_status");  
    this.orderDetail.delivery_status = e.options[e.selectedIndex].value;
    
    this.http.post(this.apiUrl + "update_delivery_status", this.orderDetail)
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
