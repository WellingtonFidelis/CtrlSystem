import { PainelGuard } from './guards/painel.guard';
import { FormularioDeactivateGuard } from './guards/formulario.deactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
    // para utilizar o lazy loading: 1 passo, coloco o Loadchrildren com o caminho completo para module
    // 2 passo, remover os imports do app.module, nenhum lugar da aplicação poderá importar o PainelModule
    // 3 passo, no painel.routing.module.ts deve apagar o path para painel
    {path: 'painel',
      loadChildren: './painel/painel.module#PainelModule',
      canActivate: [AuthGuard], // colocado CanActivate para a guarda de rotas travar o acesso sem estar logado
      canActivateChild: [PainelGuard] /* quando canActivateChild está no app.routing.module é usando no escopo global para */
      /* utilizar apenas nas rotas filhas deve ser declarado no path do .routing.module filho */
    },
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent,
    canActivate: [AuthGuard] // colocado CanActivate para a guarda de rotas travar o acesso sem estar logado
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}) // add an object to put # on url
    ],
    exports: [
        RouterModule
    ],
    providers: [
      FormularioDeactivateGuard
    ]
})
export class AppRoutingModule {}
