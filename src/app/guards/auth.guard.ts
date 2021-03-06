import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // canActivate: [ AuthGuard ] usado nas rotas que não podem ser exibidas até o usuário se logar

  constructor(
    private authService: AuthService,
    private router: Router // to do the redirection of the routers
  ) { }

  canActivate( // recebe alguns parameters
    route: ActivatedRouteSnapshot, // we have the informations about of the route
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    // verifica se o usuario esta logado
    if (this.authService.usuarioEstaAutenticado()) {

      return true;

    } else {
      // caso o usuário não estaja logado é redicionado para tela de login
      this.router.navigate(['/login']);
      return false;
    }

  }

}
