import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


@NgModule({  
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    WeatherRoutingModule,
    NgxAuthFirebaseUIModule
  ],
  declarations: [WeatherViewComponent, WeatherItemComponent, WeatherSearchComponent],
  exports: [WeatherViewComponent, WeatherItemComponent, WeatherSearchComponent]
})
export class WeatherModule { }
