import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarDetailResolver } from './cars/car-detail/car-detail.resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarDetailComponent, resolve: { car: CarDetailResolver } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
