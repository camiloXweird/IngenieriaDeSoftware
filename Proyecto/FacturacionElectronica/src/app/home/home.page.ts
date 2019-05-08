import { Component } from '@angular/core';
import{AuthService} from "../servicios/auth.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:string;
  password:string;

  constructor(private authService:AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email,this.password).then(res=>{
      this.router.navigate(['/cajero']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
   }

}
