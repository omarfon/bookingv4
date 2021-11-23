import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const visto  = localStorage.getItem('visto');
      if(!visto){
        this.router.navigate(['/home']);
        return false;
      }else{
        return true
      }
  }
  
}
