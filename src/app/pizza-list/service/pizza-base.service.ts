import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PizzaBase } from '../util/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaBaseService {

  getPizzaBases(): Observable<PizzaBase[]> {
    const pizzaBases = Object.keys(PizzaBase).map(key => PizzaBase[key]);
    return of(pizzaBases);
  }
}
