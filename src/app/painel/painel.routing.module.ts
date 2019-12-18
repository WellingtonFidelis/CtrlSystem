import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRecebimentoComponent } from 'src/app/painel/formulario-recebimento/formulario.recebimento.component';
import { AuthGuard } from '../guards/auth.guard';
import { FormularioDeactivateGuard } from '../guards/formulario.deactivate.guard';

const painelRoutes: Routes = [
    {
      path: 'painel',
      component: PainelComponent,
      canActivate: [ AuthGuard ],
      children: [
        {path: 'formulario-recebimento', component: FormularioRecebimentoComponent}
      ]
    },
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
