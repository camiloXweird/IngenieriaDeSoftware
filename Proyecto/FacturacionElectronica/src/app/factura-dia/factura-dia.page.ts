import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { runInThisContext } from 'vm';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-factura-dia',
  templateUrl: './factura-dia.page.html',
  styleUrls: ['./factura-dia.page.scss'],
})
export class FacturaDiaPage implements OnInit {

  constructor(public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) {}

    //db = firebase.firestore();
   // lista_facturas:'';
    //lista = document.getElementById('lista-facturas');
  ngOnInit() {
    
  }

  atras() {
    if (firebase.auth().currentUser.uid == "K4hqU8cheFfVcSWQvygD99TQPQ23") {
      this.router.navigate(['/administrador'])
      return false;
    } if (firebase.auth().currentUser.uid == "mxaElOHrfzYw0wchY07sm7Gw5FR2") {
      this.router.navigate(['/inicio-cajero'])
      return false;
    }
  }
/*
  facturas(){
    this.db.collection("facturas").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        this.lista_facturas += '<ion-item><ion-label type="button" value="'+doc.id+'></ion-label></ion-item>';
          //console.log(doc.id, " => ", doc.data());
      });
      this.lista.html(this.lista_facturas);
  });
  }*/

}
