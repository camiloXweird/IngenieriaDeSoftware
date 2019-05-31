import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-factura-mes',
  templateUrl: './factura-mes.page.html',
  styleUrls: ['./factura-mes.page.scss'],
})
export class FacturaMesPage implements OnInit {

  constructor(public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) { }
    db = firebase.firestore();
    factura: string;
  

  ngOnInit() {
    return this.facturas();
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

  mostrarFactura(){
    let dia = 4;//new Date().getDay();
    let mes = 4;//new Date().getMonth();
    let anno = 2019;//new Date().getFullYear();
    this.db.collection(""+anno).doc(""+mes).get().then(function (querySnapshot) {
    if(""+mes == '1'){
      
    }
  }
    )}

    facturas() {

      let dia =  4;//new Date().getDay();
      let mes = 4;//new Date().getMonth();
      let anno = 2019;//new Date().getFullYear();
      this.db.collection("" + anno).doc(mes + "").collection("" + dia).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let button = document.createElement('ion-button');
          button.color = 'danger';
          button.expand = 'block';
          let lista = document.getElementById('facturas');
          let textoButton = document.createTextNode(doc.id);
          button.onclick = () => {
          this.factura = button.innerHTML;
            this.router.navigate(['/factura', this.factura, anno, mes, dia]);//enviar datos
          };
          lista.appendChild(button);
          button.appendChild(textoButton);
        });
      });
    }


}

