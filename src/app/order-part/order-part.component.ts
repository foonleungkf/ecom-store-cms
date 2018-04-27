import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-order-part',
  templateUrl: './order-part.component.html',
  styleUrls: ['./order-part.component.css']
})
export class OrderPartComponent implements OnInit {
  
  orderList = [];
  apiUrl = 'http://192.168.0.105:8000/api/cms/order/';

  constructor(private router: Router, private http: Http) { }

  ngOnInit() { 
  	this.http.get(this.apiUrl + "get_order_list")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	console.log(res.data);
            	this.orderList = res.data;
    })
  }

  moveToOrderDetailById(id){
  	this.router.navigate(['/order-detail-part'], { queryParams: { id: id } });
  }

  removeOrderList(id) {
    this.http.post(this.apiUrl + "delete_order_list_by_id", {"order_list_id": id})
    .map((response) => response.json())
    .subscribe((res) => {
      if(res.response_code == "200"){
        alert("Remove Succ");
      }
    })
  }

}
