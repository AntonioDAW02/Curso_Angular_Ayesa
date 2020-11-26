import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/models';
import { RestaurantsService } from '../restaurants.service';
import { RestaurantHttpService } from '../restaurant-http.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurantsList: Restaurant[] = [];

//  constructor(private restaurantService: RestaurantsService) { }

  /**
   * Constructor que llama al servicio de restaurantes.
   * @param restaurantHttpService
   */

  constructor(private restaurantHttpService: RestaurantHttpService) { }

//  ngOnInit(): void {
//    this.restaurantsList = this.restaurantService.getRestaurants();
//  }

  ngOnInit(): void {
    this.restaurantHttpService.getRestaurants().subscribe((restaurants) => {
      this.restaurantsList = restaurants;
    });
  }

}
