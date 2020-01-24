import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TokenService } from '../../shared/token.service';
import { Login } from 'src/app/model/login.model';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Login;

  constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) {
    this.credentials = new Login();
  }

  ngOnInit() {
  }




  login() {
    this.authService.login(this.credentials).subscribe(
      token => {
        this.authService.setJWToken(token);
        this.authService.getAccountDetails().subscribe(
          account => {
            this.authService.setSession(account);
            this.router.navigate(['/cust-dashboard']);
          }
        );
      }
    );
    
  }





}