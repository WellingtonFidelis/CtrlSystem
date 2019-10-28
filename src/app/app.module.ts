import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { routing } from './app.routing';
import { PainelComponent } from './painel/painel.component';
import { PainelService } from './painel/painel.service';
import { FclrecebComponent } from './painel/fclreceb/fclreceb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PainelComponent,
    FclrecebComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    // routing
    ],
  providers: [
    PainelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
