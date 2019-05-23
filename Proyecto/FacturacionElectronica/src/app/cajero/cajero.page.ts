import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.page.html',
  styleUrls: ['./cajero.page.scss'],
})
export class CajeroPage implements OnInit {
  constructor(public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) { }

  db = firebase.firestore();
  factura: string;
  codigo: string;
  cant: number;
  valor: number;
  fecha_dia: string;
  fecha_mes: string;
  fecha_anno: string;
  nombre: string;
  telefono: string;
  correo: string;

  ngOnInit() {
  }

  atras() {
    this.router.navigate(['/inicio-cajero']);
  }

  users: any[] = [
    {
      id: 1,
      first: 'Primer estado factura'
    },
    {
      id: 2,
      first: 'Segundo estado factura'
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;


  enviar_Datos() {
    this.db.collection(this.fecha_anno).doc(this.fecha_mes).collection(this.fecha_dia).doc(this.factura).set({
      codigo_producto: this.codigo,
      cantidad: this.cant,
      valor_compra: this.valor,
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo
    }).then((datos) => {
      console.log(datos)
    }).catch((error) => {
      console.log(error);
    })
  }

}

