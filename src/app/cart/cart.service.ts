import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../util/pizza';
import { CartItem } from './model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartStorageKey = 'cart-items';
  private cartItems: CartItem[] = [];

  cartItems$ = new BehaviorSubject<CartItem[]>([]);

  constructor(private localStorage: LocalStorageService) { }

  addItem(pizza: Pizza): void {
    console.log(this.cartItems);
    this.cartItems.push(new CartItem(pizza, 1));
    this.emitItems();
  }

  removeItem(pizza: Pizza): void {
    this.cartItems = this.cartItems.filter(cartItem => pizza.id !== cartItem.item.id);
    this.emitItems();
  }

  isInCart(pizza: Pizza) {
    return this.cartItems.findIndex(cartItem => cartItem.item.id === pizza.id) !== -1;
  }

  emitItems() {
    this.cartItems$.next(this.cartItems);
    this.localStorage.store(this.cartStorageKey, this.cartItems);
  }

  retrieveItems(): void {
    let items = this.localStorage.retrieve(this.cartStorageKey);
    if (items && items.length > 0) {
      this.cartItems = items as CartItem[];
    }
  }
}
