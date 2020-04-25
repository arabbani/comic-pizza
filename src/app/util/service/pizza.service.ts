import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pizzaItems } from '../constants';
import { PizzaFilter } from '../enum';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  filteredPizza$ = new BehaviorSubject(pizzaItems);

  constructor() { }


  filterPizza(filter: PizzaFilter): void {
    // Filter is not working
    const filterdPizzaItems = pizzaItems.filter(pizza => {
      return (filter.price && (pizza.price >= filter.price)) || (filter.base && filter.base === pizza.base) || (filter.type && filter.type === pizza.type) || (filter.veg && filter.veg === pizza.veg);
    });
    this.filteredPizza$.next(filterdPizzaItems)
  }
}
