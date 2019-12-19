import { FormularioDeactivateGuard } from './guards/formulario.deactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    // para utilizar o lazy loading: 1 passo, coloco o Loadchrildren com o caminho completo para module
    // 2 passo, remover os imports do app.module, nenhum lugar da aplicação poderá importar o PainelModule
    // 3 passo, no painel.routing.module.ts deve apagar o path para painel
    {path: 'painel', loadChildren: './painel/painel.module#PainelModule'},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
      FormularioDeactivateGuard
    ]
})
export class AppRoutingModule {}
