import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { FclrecebComponent } from './painel/fclreceb/fclreceb.component';

const APP_ROUTES: Routes = [
  { path: 'painel', component: PainelComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'painel/fclreceb', component: FclrecebComponent},
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
