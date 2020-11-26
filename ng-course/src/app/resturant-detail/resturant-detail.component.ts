import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/models';
import { RestaurantsService } from '../restaurants.service';
import { RestaurantHttpService } from '../restaurant-http.service';


@Component({
  selector: 'app-resturant-detail',
  templateUrl: './resturant-detail.component.html',
  styleUrls: ['./resturant-detail.component.scss']
})
export class ResturantDetailComponent implements OnInit {

  paramId: string = '';
  restaurant: Restaurant;
  mapRestaurants: Restaurant[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService,
    private restaurantHttpService: RestaurantHttpService,
    private location: Location,
    private router: Router) { }


  ngOnInit(): void {

//  this.paramId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((paramMap) => {
      this.paramId = paramMap.get('id');

      let numberId = parseInt(this.paramId);
      if (!isNaN(numberId)) {
        this.restaurantHttpService.getRestaurantsById(numberId).subscribe((restaurant) => {
          this.restaurant = restaurant;
          this.mapRestaurants = [this.restaurant];
        })
//        this.restaurant = this.restaurantService.getRestaurantsById(numberId);
//        this.mapRestaurants = [this.restaurant];
//        this.mapRestaurants.push(this.restaurant);
      } else {

      }
    });

  }

  goBack() {
    this.location.back();
  }

  goNext() {
    const id = this.restaurant.id;
    const nextId = id + 1;
    this.router.navigate(['restaurants', nextId]);
  }

}
