import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/models';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number = 37.392529;
  lng: number = -5.994072;
  bounds: google.maps.LatLngBoundsLiteral;
  clickedMarketSubject: Subject<number>;

  private _restaurants: Restaurant[];

  @Input() set restaurants(restaurants: Restaurant[]){
    this._restaurants = restaurants;
    this.fitBounds();
  }

  get restaurants(): Restaurant[]{
    return this._restaurants;
  }

  constructor() { }

  ngOnInit(): void {
    //this.fitBounds();
    this.clickedMarketSubject = new Subject();
//  this.clickedMarketSubject.subscribe((id) => {
//    alert(id);
//  })
  }

  getClickedMarkerObservable(): Observable<number>{
    return this.clickedMarketSubject.asObservable();
  }

  clickMarker(id: number) {
    //alert(id);
    this.clickedMarketSubject.next(id);
  }

  fitBounds() {
    let south = Number.MAX_VALUE,
      north = -Number.MAX_VALUE,
      west = Number.MAX_VALUE,
      east = -Number.MAX_VALUE;

    this.restaurants.map((restaurant) => {
      const latLong = restaurant.latlng;
      const lat = latLong.lat;
      const lng = latLong.lng;

      south = south < lat ? south : lat;
      north = north > lat ? north : lat;
      west = west < lng ? west : lng;
      east = east > lng ? east : lng;
    });

    this.lat = (south + north) / 2;
    this.lng = (west + east) / 2;

    this.bounds = { west: west, north: north, south: south, east: east };
  }
}
