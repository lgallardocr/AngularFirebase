import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {
  cities: any[];
  city: any = {};
  panelOpenState = false;
  editForm = true;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      this.getCities(id);
    }
  }

  getCities(id: string) {
    this.firebaseService
      .getUserCities(id)
        .subscribe(
          cities => {
            console.log(cities);
            this.cities = cities;
          }
        );
  }

  saveCityUpdate(newCity: City) {
    console.log(newCity);
    this.firebaseService
      .updateCity(this.userId, this.city.id, newCity);
    this.city = {};
  }

  updateCity(city: any) {
    this.city.name = city.weather.name;
    this.city.description = city.weather.description;
    this.city.temperature = city.weather.temperature;
    this.city.id = city.id;
  }

  deleteCity(id: string) {
    this.firebaseService
      .deleteCity(this.userId, id);
  }

}
