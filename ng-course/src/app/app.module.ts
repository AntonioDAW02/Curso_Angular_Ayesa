import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MaterialModule } from './material/material.module';
import { NeightborhoodCodePipe } from './neightborhood-code.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ResturantDetailComponent } from './resturant-detail/resturant-detail.component';
import { AboutComponent } from './about/about.component';
import { ProyectInfoComponent } from './about/proyect-info/proyect-info.component';
import { PeopleInfoComponent } from './about/people-info/people-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NeightborhoodCodePipe,
    RestaurantComponent,
    HeaderComponent,
    MapComponent,
    RestaurantListComponent,
    PageNotFoundComponent,
    CreateRestaurantComponent,
    ResturantDetailComponent,
    AboutComponent,
    ProyectInfoComponent,
    PeopleInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
