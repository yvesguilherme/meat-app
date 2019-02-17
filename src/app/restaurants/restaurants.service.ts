import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

import { MEAT_API } from '../app.api';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  /** Retorna todos os restaurantes. */
  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams().append('q', search);
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params });
  };

  /** Retorna o restaurante que foi passado como parâmetro. */
  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  };

  /** Retorna os dados do componente de reviews. */
  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  /** Retorna os dados do componente de menu. */
  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
