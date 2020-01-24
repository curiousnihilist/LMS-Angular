import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account.model';
import { JWToken } from '../model/jwtoken.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInAccount:Account;

  public isloggedin:boolean = false;
 
  private LOGIN_URL:string = "http://localhost:8880/auth-api/authenticate";
  private SIGNUP_URL:string = "http://localhost:8880/auth-api/sign-up";
  private GETUSER_URL:string = "http://localhost:8880/auth-api/get-user";

  constructor(private http:HttpClient) {

   }

  login(credentials:Login): Observable<JWToken>{
    this.isloggedin = true;
    return this.http.post<JWToken>(this.LOGIN_URL,credentials);
  }

  signup(account:Account) : Observable<JWToken>{
    return this.http.post<JWToken>(this.SIGNUP_URL,account);
  }

  setJWToken(token:JWToken){
    sessionStorage.setItem('token',token.token);
  }

  getJWToken():string{
    return sessionStorage.getItem('token');
  }

  setSession(account:Account){
    this.loggedInAccount = account;
    console.log(this.loggedInAccount);
    
  }

  getSession():Account{
    return this.loggedInAccount;
  }

  getAccountDetails():Observable<Account>{
    return this.http.get<Account>(this.GETUSER_URL);
  }

  destroySession(){
    this.isloggedin = false;
    sessionStorage.clear();
  }


}
