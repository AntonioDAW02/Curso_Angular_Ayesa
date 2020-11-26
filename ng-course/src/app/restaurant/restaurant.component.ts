import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Input() showDetailsButton: Boolean = true;
  @Input() selectedIdObservable: Observable<number>;

  restaurantHovered: Restaurant;
  selectedId: number;

  constructor() { }

  ngOnInit(): void {
    if (this.selectedIdObservable) {
      this.selectedIdObservable.subscribe((id) => {
      this.selectedId = id;
      });
    }
  }

  MouseOver(restaurante: Restaurant) {
    this.restaurantHovered = restaurante;
  }

  GetRestaurantNumberOfReviews(restaurant: Restaurant) {
    return restaurant.reviews.length;
  }
}
