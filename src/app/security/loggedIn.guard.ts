import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService) { }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn();
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  /**
   * Impede que o usuário não autenticado
   * acesse aquele módulo inteiro.
   *
   * Neste método, a rota ainda não está ativada.
   * Ele passa apenas a configuração da rota para
   * ser decidido alguma coisa.
   *
   * Este método é ativado antes do canActivate.
   */
  canLoad(route: Route): boolean {
    console.log('canLoad');
    return this.checkAuthentication(route.path);
  }

  /**
   * Este método já tem todas as configurações
   * da rota que irá ser ativada, parâmetro e
   * referência a outros objetos, todas as rotas
   * parents se quiser.
   *
   * @param activatedRoute
   * @param routerState
   */
  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    console.log('canActivate');
    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }
}
