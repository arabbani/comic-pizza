import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../util/pizza';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartStorageKey = 'cart-items';
  private cartItems: Pizza[] = [];

  cartItems$ = new BehaviorSubject<Pizza[]>([]);

  constructor(private localStorage: LocalStorageService) { }

  addItem(pizza: Pizza): void {
    if (!this.cartItems) {
      let items = this.localStorage.retrieve(this.cartStorageKey);
      if (items && items.length > 0) {
        this.cartItems = items;
      }
    }
    this.cartItems.push(pizza);
    this.emitCartItems();
  }

  removeItem(pizza: Pizza): void {
    this.cartItems = this.cartItems.filter(item => pizza.id !== item.id);
    this.emitCartItems();
  }

  emitCartItems() {
    this.cartItems$.next(this.cartItems);
    this.localStorage.store(this.cartStorageKey, this.cartItems);
    console.log(this.cartItems);
  }
}
