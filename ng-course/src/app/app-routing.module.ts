import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PeopleInfoComponent } from './about/people-info/people-info.component';
import { ProyectInfoComponent } from './about/proyect-info/proyect-info.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { ResturantDetailComponent } from './resturant-detail/resturant-detail.component';


const routes: Routes = [
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'proyect', component: ProyectInfoComponent },
      { path: ':id', component: PeopleInfoComponent },
      { path: '**', redirectTo: '/about/proyect', pathMatch: 'full'}
  ]},
  { path: 'restaurants/new', component: CreateRestaurantComponent },
  { path: 'restaurants/:id', component: ResturantDetailComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
