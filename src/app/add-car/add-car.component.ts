import { Component } from '@angular/core';

interface Car {
  id: number,
  name: string,
  model: string,
  year: number,
  engine: string,
  transmission: string,
  color: string,
  price: number,
  description: string,
  img: string
};
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: Car;
  constructor() { this.car = {} as Car; }
  addCar(): void {
    if (!this.car.name || !this.car.model || !this.car.year ||
      !this.car.engine || !this.car.transmission ||
      !this.car.color || !this.car.price ||
      !this.car.description || !this.car.img) {
      alert('Please fill all fields');
    } else {
      const cars = JSON.parse(localStorage.getItem('cars') || '[]');
      this.car.id = cars.length + 1;
      cars.push(this.car);
      localStorage.setItem('cars', JSON.stringify(cars));
      this.car = {} as Car;
      alert('Car added');
    }
  }
  goBack(): void {
    window.history.back();
  }
}
