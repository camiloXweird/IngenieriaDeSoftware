import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Button } from 'protractor';

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
  cant: number = 0;
  valor: number;
  fecha_dia: string;
  fecha_mes: string;
  fecha_anno: string;
  nombre: string;
  telefono: string;
  correo: string;

  valorTotal: number = 0;
  producto = document.getElementById('productos');
  cantidad = document.getElementById('cantidad');

  ngOnInit() {
    this.productos();
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
      valor_compra: this.valorTotal,
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      fecha: this.fecha_anno + "/" + this.fecha_mes + "/" + this.fecha_dia,
      estado: 'Valida'
    }).then((datos) => {
      console.log(datos)
    }).catch((error) => {
      console.log(error);
    });
    /*this.factura = '';
    this.codigo = '';
    this.cant=null;
    this.valor=null;
    this.fecha_dia='';
    this.fecha_mes='';
    this.fecha_anno='';
    this.nombre='';
    this.telefono='';
    this.correo='';
    this.valorTotal=null;*/
  }

  productos() {
    let productos = document.getElementById('productos');
    this.db.collection('productos').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let select_option = document.createElement('ion-select-option');
        let textSelect = document.createTextNode(doc.data().nombre + ' - $' + doc.data().valor);
        select_option.value = doc.id;
        productos.appendChild(select_option);
        select_option.appendChild(textSelect);
      });
    });
  };

  customAlertOptions: any = {
    header: 'Productos',
    subHeader: 'Selecciona un producto',
    translucent: true
  };


  agregar() {
    if (this.codigo != '') {
      if (this.cant == 0) {
        this.cant = 1;
      }
      let tablaCompra = document.getElementById('tableCompra');
      let row = document.createElement('ion-row');
      let colnombre = document.createElement('ion-col');
      let colcantidad = document.createElement('ion-col');
      let colvalor = document.createElement('ion-col');
      let compra = this.cant;
      row.appendChild(colnombre);
      row.appendChild(colcantidad);
      row.appendChild(colvalor);
      let valorCompra: number;
      this.db.collection('productos').doc(this.codigo).get().then((doc) => {
        let valor = doc.get('valor');
        tablaCompra.appendChild(row);
        let textColNom = document.createTextNode(doc.data().nombre);
        let textColCant = document.createTextNode(this.cant + '');
        valorCompra = valor * compra;
        let textColVal = document.createTextNode(valorCompra + '');
        colnombre.appendChild(textColNom);
        colcantidad.appendChild(textColCant);
        colvalor.appendChild(textColVal);
        this.valorTotal = this.valorTotal + valorCompra;
      });
    }
  }

}

