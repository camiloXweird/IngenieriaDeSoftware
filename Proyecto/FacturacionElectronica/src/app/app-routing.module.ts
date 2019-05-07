import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import{NologinGuard} from "./guards/nologin.guard"

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [NologinGuard]},
  { path: 'inicio-cajero', loadChildren: './inicio-cajero/inicio-cajero.module#InicioCajeroPageModule', canActivate : [AuthGuard]},
  { path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorPageModule' },
  { path: 'factura-dia', loadChildren: './factura-dia/factura-dia.module#FacturaDiaPageModule' },
  { path: 'factura-mes', loadChildren: './factura-mes/factura-mes.module#FacturaMesPageModule' },
  { path: 'reporte-iva', loadChildren: './reporte-iva/reporte-iva.module#ReporteIvaPageModule' },
  { path: 'factura', loadChildren: './factura/factura.module#FacturaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
