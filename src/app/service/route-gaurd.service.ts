import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';

@Injectable()
export class RouteGaurd implements CanActivate{


    constructor(private authService:AuthService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{

        if(this.authService.isloggedin)
            return true;
        else{
            alert("Please Login First!");
            this.router.navigate(['/login']);
            return false;
        }

    }
}