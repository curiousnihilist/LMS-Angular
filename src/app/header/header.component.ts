import { Component, OnInit, OnChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { Account } from '../model/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
  isUserLoggedIn:boolean = false;
  // isAdminLoggedIn:boolean = false;
  // // showLogout:boolean = false;
  // // showRegister:boolean = true;
  // // showLogin:boolean =true;
  account:Account=null;

  constructor(private authService:AuthService, private route:Router) {
    this.account = new Account();
   }

  ngOnInit() {
  }

  logout(){
    this.authService.destroySession();
    this.route.navigate(['/home']);
  }

 

}
