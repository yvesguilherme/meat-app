import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from 'app/restaurants/restaurants.service';

import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  /**
   * O método snapshot foi utilizado ao invés
   * do subscribe apenas pelo motivo de acessar
   * uma única vez a URL.
   * O método snapshot é como se fosse uma 'foto'
   * no momento do acesso de como estão os estados
   * dos parâmetros.
   */
  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
