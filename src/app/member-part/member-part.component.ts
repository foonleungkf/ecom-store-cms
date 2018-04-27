import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-member-part',
  templateUrl: './member-part.component.html',
  styleUrls: ['./member-part.component.css']
})
export class MemberPartComponent implements OnInit {
  
  memberList = [];
  apiUrl = 'http://192.168.0.105:8000/api/cms/member/';

  constructor(private router: Router, private http: Http) { }

  ngOnInit() { 
  	this.http.get(this.apiUrl + "get_cus_member_list")
            .map((response) => response.json())
            //.subscribe == .then
            .subscribe((res) => { 
            	console.log(res.data);
            	this.memberList = res.data;
    })
  }

  moveToMemberDetailById(id){
  	this.router.navigate(['/modify-member-part'], { queryParams: { id: id } });
  }

  removemMember(id) {
    this.http.post(this.apiUrl + "delete_member_by_id", {"member_id": id})
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
