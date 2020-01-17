import { FormularioDeactivateGuard } from './../../../../formulario/front/src/app/guards/formulario.deactivate.guard';
import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

import { FormularioRecebimentoComponent } from 'src/app/painel/formulario-recebimento/formulario.recebimento.component';
// import { AuthGuard } from '../guards/auth.guard';
// import { FormularioDeactivateGuard } from '../guards/formulario.deactivate.guard';

const painelRoutes: Routes = [
    { path: '', component: PainelComponent }, // apagar o caminho principal, pois já está configurado em app.routing.module.ts
    { path: 'formulario-recebimento', component: FormularioRecebimentoComponent,
      canDeactivate: [FormularioDeactivateGuard]
    }
      // canActivate: [ AuthGuard ],
      // children: [
        // {path: 'formulario-recebimento', component: FormularioRecebimentoComponent}
      // ]
    // },
];

@NgModule({
    imports: [
        RouterModule.forChild(painelRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PainelRoutingModule {}
