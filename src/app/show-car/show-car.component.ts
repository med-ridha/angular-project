import { Component } from '@angular/core';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent {
  id: number = JSON.parse(localStorage.getItem('id') || '{}');
  cars: any[] = JSON.parse(localStorage.getItem('cars') || '{}');
  car: any = this.cars[this.id - 1];
  constructor() { }
  buy(car: any): void {

    alert(`You bought ${car.name} ${car.model} for $${car.price}`);
  }
  goBack(): void {
    window.history.back();
  }
}
