import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalRouteGuard implements CanActivate {

   constructor(private router:Router){}
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken = localStorage.getItem('authToken');
 if(authToken === '' || authToken === null || authToken === undefined){
      this.router.navigate(['auth/login'])
      return false;
    } else{
      return true;
    }
  }
}
