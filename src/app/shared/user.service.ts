import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  base_url = "";
  constructor(private _http : HttpClient, private tokenService : TokenService, private router: Router) { }

  register(body:any){
    return this._http.post(`${this.base_url}/users/register`, body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body):Observable<any> {
    return this._http.post(`${this.base_url}/users/login`, body)
  }

  user(){
    return this._http.get(`${this.base_url}/users/user`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  // logout(){
  //   return this._http.get(`${this.base_url}/users/logout`,{
  //     observe:'body',
  //     withCredentials:true,
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   })
  // }

  logout(){
    this.tokenService.DeleteToken();
    this.router.navigate(['home'])
  }
  isLoggedIn() {
    if (this.tokenService.GetToken()){
return true;
    }
    return false;
  }
}

// baseUrl = "http://localhost:3500";
// constructor(private http:HttpClient,
//    private tokenService : TokenService) { }

// registerUser(body) : Observable<any> {
//   return this.http.post(`${this.baseUrl}/libraries/register`, body)
// }
// loginUser(body):Observable<any> {
//   return this.http.post(`${this.baseUrl}/libraries/login`, body)
// }
// isLoggedIn() {
//   if (this.tokenService.GetToken()){
// return true;
//   }
//   return false;
// }

//   user(){
//     return this.http.get(`${this.baseUrl}/libraries/user`,{
//       observe:'body',
//       withCredentials:true,
//       headers:new HttpHeaders().append('Content-Type','application/json')
//     })
//   }

// logout(){
//   return this.http.get(`${this.baseUrl}/libraries/logout`,{
//     observe:'body',
//     withCredentials:true,
//     headers:new HttpHeaders().append('Content-Type','application/json')
//   })
// }
// }