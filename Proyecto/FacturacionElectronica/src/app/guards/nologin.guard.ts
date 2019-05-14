import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth"
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class NologinGuard implements CanActivate {

  constructor(private AFauth : AngularFireAuth, private router:Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.AFauth.authState.pipe(map(auth=>{
        if(isNullOrUndefined(auth)){
          return true;
        }else{
          if(firebase.auth().currentUser.uid=="K4hqU8cheFfVcSWQvygD99TQPQ23"){
            this.router.navigate(['/administrador'])
            return false;
          }if(firebase.auth().currentUser.uid=="mxaElOHrfzYw0wchY07sm7Gw5FR2"){
              this.router.navigate(['/inicio-cajero'])
              return false;
          }
        }
       
      }))
  }
}
