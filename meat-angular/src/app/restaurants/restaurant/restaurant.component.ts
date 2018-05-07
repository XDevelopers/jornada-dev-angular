import { Component, OnInit, Input } from '@angular/core';
import { IRestaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: IRestaurant;

  constructor() { }

  ngOnInit() {
  }

}
