import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { Person } from 'src/app/model/person.model';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmPassword:string;
  account:Account;
  person:Person;
  today: string;
  mindate:string;
  maxdate:string;

  constructor(private datePipe:DatePipe, private authService:AuthService, private router:Router) { 
    this.account = new Account();
    this.person = new Person();
  }

  ngOnInit() {
    this.today = this.datePipe.transform(new Date(), 'yyy-MM-dd');
    this.mindate = this.datePipe.transform(new Date("1900-01-01"));
    this.maxdate = this.datePipe.transform(new Date("2005-01-01"));
  }

  register(){
    this.person.setSubscriptionDate(this.today);
    this.account.setRole("ROLE_USER");
    this.account.setPerson(this.person);
    console.log(this.account);
    this.authService.signup(this.account).subscribe(
      token => { console.log(token);}
    );
    alert("Thank You "+this.person.getName()+ " for registering! Please Login Again.");
    this.router.navigate(['/login']);
  }

}
