import { FormularioDeactivateGuard } from './../../../../formulario/front/src/app/guards/formulario.deactivate.guard';
import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormularioRecebimentoComponent } from 'src/app/painel/formulario-recebimento/formulario.recebimento.component';
import { PainelRoutingModule } from 'src/app/painel/painel.routing.module';
// simport { FormularioDeactivateGuard } from '../guards/formulario.deactivate.guard';
import { AuthService } from '../login/auth.service';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        PainelRoutingModule
    ],

    declarations: [
        FormularioRecebimentoComponent,
        PainelComponent,
    ],

    providers: [
      AuthService,
      FormularioDeactivateGuard
    ]

})

export class PainelModule {}
