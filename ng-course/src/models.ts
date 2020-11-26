export class Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: LatLng;
  cuisine_type: string;
  operating_hours: any;
  reviews: Review[];
}

export class LatLng {
  lat: number;
  lng: number;
}

export class Review {
  name: string;
  date: string;
  rating: number;
  comments: string;
}
