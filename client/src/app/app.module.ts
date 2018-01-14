import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { ServerService } from './shared/server.service';
import { CarsService } from './cars/cars.service';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CarDetailResolver } from './cars/car-detail/car-detail.resolve.service';
import { CarsFilterPipe } from './cars/cars-list/cars-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    CarItemComponent,
    CarDetailComponent,
    CarsFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ServerService, CarsService, HttpClient, CarDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
