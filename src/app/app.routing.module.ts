import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { FclrecebComponent } from './painel/fclreceb/fclreceb.component';

const appRoutes: Routes = [
  { path: 'painel', component: PainelComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'painel/fclreceb', component: FclrecebComponent},
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
