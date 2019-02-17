import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { OrderComponent } from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  /**
   * Método que "Dá a chance da aplicação"
   * perguntar se o usuário realmente quer
   * desistir de ficar na página
   * (estar com o componente ativado) e ir
   * para uma outra página, ativando um outro
   * componente através da navegação.
   */
  canDeactivate(
    orderComponent: OrderComponent,
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): boolean {
    if (!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    } else {
      return true;
    }
  }
}
