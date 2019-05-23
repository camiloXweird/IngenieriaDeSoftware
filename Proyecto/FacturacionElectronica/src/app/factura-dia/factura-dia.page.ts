import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { FacturaPage } from '../factura/factura.page';


@Component({
  selector: 'app-factura-dia',
  templateUrl: './factura-dia.page.html',
  styleUrls: ['./factura-dia.page.scss'],
})
export class FacturaDiaPage implements OnInit {

  constructor(public navCtrl: NavController, public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) { }

  db = firebase.firestore();
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

  facturas() {
    let dia = new Date().getDay();
    let mes = new Date().getMonth();
    let anno = new Date().getFullYear();
    this.db.collection("" + anno).doc("" + mes).collection("" + dia).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let label = document.createElement('ion-input');
        let button = document.createElement('ion-button');
        let textoLabel = document.createTextNode(doc.id);
        let textoButton = document.createTextNode('ver factura');
        label.disabled = true;
        label.appendChild(textoLabel);
        button.appendChild(textoButton);
        document.getElementById("facturas").appendChild(label);
        document.getElementById("facturas").appendChild(button);
        button.onclick = ()=>{
          let lista = document.createElement('ion-list');
          let labelf = document.createElement('ion-label');
          let labelf1 = document.createElement('ion-label');
          let labelf2 = document.createElement('ion-label');
          let labelf3 = document.createElement('ion-label');
          let labelf4 = document.createElement('ion-label');
          let labelf5 = document.createElement('ion-label');

          let br = document.createElement('br');
          lista.appendChild(labelf);
          lista.appendChild(labelf1);
          lista.appendChild(labelf2);
          lista.appendChild(labelf3);
          lista.appendChild(labelf4);
          lista.appendChild(labelf5);
          let textolabelf = document.createTextNode('Nombre del cliente: '+doc.data().nombre);
          let textolabelf1 = document.createTextNode('Telefono del cliente: '+doc.data().telefono);
          let textolabelf2 = document.createTextNode('Correo del cliente: '+doc.data().correo);
          let textolabelf3 = document.createTextNode('Cantidad de productos comprados: '+doc.data().cantidad);
          let textolabelf4 = document.createTextNode('Codigos de los productos: '+doc.data().codigo_producto);
          let textolabelf5 = document.createTextNode('Valor de la compra: '+doc.data().valor_compra);
          labelf.appendChild(textolabelf);
          labelf.appendChild(br);
          labelf1.appendChild(textolabelf1);
          lista.appendChild(br);
          labelf2.appendChild(textolabelf2);
          lista.appendChild(br);
          labelf3.appendChild(textolabelf3);
          lista.appendChild(br);
          labelf4.appendChild(textolabelf4);
          lista.appendChild(br);
          labelf5.appendChild(textolabelf5);
          
          document.getElementById("facturas").appendChild(lista);

        }
        //console.log(doc.id, " => ", doc.data());
      });
    }).catch((error) => {
      console.log("error", error);
    });
  }

  mostrarFactura() {
    console.log("ok");
  }

}