import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';
import { Account } from 'src/app/model/account.model';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  account:Account;
  person:Person;

  constructor(private authService:AuthService) {
    
   }

  ngOnInit() {
    this.account = this.authService.getSession();
    this.person = this.account.person;
  }

}
