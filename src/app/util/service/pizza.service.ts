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
    let filterdPizzaItems = pizzaItems;
    if (filter.price) {
      filterdPizzaItems = filterdPizzaItems.filter(pizza => pizza.price >= filter.price);
    }
    if (filter.base) {
      filterdPizzaItems = filterdPizzaItems.filter(pizza => pizza.base === filter.base);
    }
    if (filter.type) {
      filterdPizzaItems = filterdPizzaItems.filter(pizza => pizza.type === filter.type);
    }
    if (filter.veg) {
      filterdPizzaItems = filterdPizzaItems.filter(pizza => pizza.veg === filter.veg);
    }
    this.filteredPizza$.next(filterdPizzaItems)
  }
}
