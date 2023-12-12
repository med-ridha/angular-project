import { Component } from '@angular/core';

interface Car {
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
    alert(this.car.name);
  }
}
