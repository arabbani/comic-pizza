import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PizzaType } from '../util/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaTypeService {

  getPizzaTypes(): Observable<PizzaType[]> {
    const pizzaTypes = Object.keys(PizzaType).map(key => PizzaType[key]);
    return of(pizzaTypes);
  }
}
