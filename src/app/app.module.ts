import { PainelGuard } from './guards/painel.guard';
import { PainelComponent } from './../../../formulario/front/src/app/painel/painel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { ConsultaModule } from 'src/app/consulta/consulta.module';
// import { PainelModule } from 'src/app/painel/painel.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({

  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ConsultaModule,
    // PainelModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],

  providers: [
    AuthService,
    AuthGuard,
    PainelGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
