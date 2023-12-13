import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: any[];
  search: string = '';
  constructor(private router: Router) {
    this.cars = JSON.parse(localStorage.getItem('cars') || '{}');
  }

  show(id: Number) {
    localStorage.setItem('id', id.toString());
    // navigate to show car component
    this.router.navigate(['/cars', id])
  }
  searchCars() {
    this.cars = JSON.parse(localStorage.getItem('cars') || '{}')
      .filter((car: any) => {
        return car.name.toLowerCase()
          .includes(this.search.toLowerCase())
      });
  }
}
