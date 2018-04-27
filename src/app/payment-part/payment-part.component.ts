import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-payment-part',
  templateUrl: './payment-part.component.html',
  styleUrls: ['./payment-part.component.css']
})
export class PaymentPartComponent implements OnInit {
  
  paymentList = [];
  apiUrl = 'http://192.168.0.105:8000/api/cms/payment/';
  imageUrl = 'http://192.168.0.105:8000/storage/photos/';	

  constructor(private route: ActivatedRoute, private http: Http, private router: Router) { }

  ngOnInit() { 
  	this.http.get(this.apiUrl + "get_payment_list")
        .map((response) => response.json())
        //.subscribe == .then
        .subscribe((res) => { 
            console.log(res.data);
            this.paymentList = res.data;
            console.log(this.paymentList);
    });       
  }
}
