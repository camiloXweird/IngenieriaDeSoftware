import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import{NologinGuard} from "./guards/nologin.guard"

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [NologinGuard]},
  { path: 'inicio-cajero', loadChildren: './inicio-cajero/inicio-cajero.module#InicioCajeroPageModule', canActivate : [AuthGuard]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
