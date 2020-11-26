import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Restaurant } from 'src/models';
import { RestaurantHttpService } from '../restaurant-http.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent implements OnInit {

  createRestaurantForm: FormGroup;
  restaurant: Restaurant;
  formSubmited = false;

  constructor(private fb: FormBuilder,
    private restaurantHttpService: RestaurantHttpService) { }

  ngOnInit(): void {
    this.createRestaurantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)], this.validatingOperatingHours],
      address: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      photograph: ['', [Validators.required]],
      cuisine_type: ['', [Validators.required]],
      latlng: this.fb.group({
        lat: ['', [Validators.required]],
        lng: ['', [Validators.required]],
      }),
      operating_hours: this.fb.group({
        Monday: ['', [Validators.required, this.validatingOperatingHours]],
        Tuesday: ['', [Validators.required, this.validatingOperatingHours]],
        Wednesday: ['', [Validators.required, this.validatingOperatingHours]],
        Thursday: ['', [Validators.required, this.validatingOperatingHours]],
        Friday: ['', [Validators.required, this.validatingOperatingHours]],
        Saturday: ['', [Validators.required, this.validatingOperatingHours]],
        Sunday: ['', [Validators.required, this.validatingOperatingHours]],
      }),
    });

    this.createRestaurantForm.valueChanges.subscribe((value) => {
      this.restaurant = value;
    });

  }

  submitForm() {
    //alert(this.restaurant);
    if (!this.formSubmited) {
      this.formSubmited = true;
      this.restaurantHttpService.createRestaurant(this.restaurant).subscribe((restaurant) => {
        this.formSubmited = false;
        alert('Restaurante creado');
      }, (error) => {
        this.formSubmited = false;
        alert('hubo un error');
      });
    }
  }

  validatingOperatingHours (control: AbstractControl): {[key : string] : any} {
    const pattern = '^\\d?\\d:\\d?\\d (pm|am) - \\d?\\d:\\d?\\d (pm|am)(, \\d?\\d:\\d?\\d (pm|am) - \\d?\\d:\\d?\\d (pm|am))?$';
    const regex = new RegExp(pattern);
    const value = control.value;

    if (regex.test(value)) {
      return null;
    } else {
      return {'format-operating-hours': 'it has an error wrong format for operating hours'}
    }

  }

}
