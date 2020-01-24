import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  viewaccount:boolean = true;
  returnbook:boolean = false;
  issuedbook:boolean =false;
  
  constructor(private route:Router) { }

  ngOnInit() {
  }

  searchBook(){
    this.route.navigate(['/search']);
  }

  viewReturnBook(){
    this.returnbook = true;
    this.viewaccount = false;
    this.issuedbook = false;
  }

  viewIssuedBooks(){
    this.returnbook = false;
    this.viewaccount = false;
    this.issuedbook = true;
  }

  viewAccount(){
    this.returnbook = false;
    this.viewaccount = true;
    this.issuedbook = false;
  }

}
