import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  /** Retorna os itens. */
  items(): any[] {
    return this.shoppingCartService.items;
  }

  /** Remover itens do carrinho. */
  clear() {
    this.shoppingCartService.clear();
  }

  /** Remove um item selecionado. */
  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  /** Adiciona um item selecionado. */
  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

  /** Retorna o valor total. */
  total(): number {
    return this.shoppingCartService.total();
  }

}
