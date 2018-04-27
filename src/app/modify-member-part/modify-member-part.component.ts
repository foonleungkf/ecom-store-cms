import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-modify-member-part',
  templateUrl: './modify-member-part.component.html',
  styleUrls: ['./modify-member-part.component.css']
})
export class ModifyMemberPartComponent implements OnInit {
 

  apiUrl = 'http://192.168.0.105:8000/api/cms/member/';
  memberInfo = { active: 1 };

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
  	this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        var id = params.id;

        this.http.get(this.apiUrl + "get_cus_member_by_id?member_id=" + id)
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
              console.log(res.data);
              this.memberInfo = res.data[0];
            })
    });
  }

  updateMemberAccount(event) {
    //check active toggle 
    if ((document.getElementById("active")).checked){
      this.memberInfo.active = 1;
    } else {
      this.memberInfo.active = 0;
    }

    console.log(this.memberInfo);

    if (this.memberInfo.email == "" || this.memberInfo.password == ""){
      return document.getElementsByClassName("alert-danger")[0].style.display =  "block";
    }

    

    this.http.post(this.apiUrl + "update_member", this.memberInfo)
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
