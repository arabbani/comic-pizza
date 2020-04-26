import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pizzaItems } from '../util/constants';
import { PizzaFilter } from '../util/enum';

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
    if (filter.dishType) {
      filterdPizzaItems = filterdPizzaItems.filter(pizza => pizza.dishType === filter.dishType);
    }
    this.filteredPizza$.next(filterdPizzaItems)
  }
}
