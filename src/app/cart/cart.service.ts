import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pizza } from '../util/pizza';
import { CartItem } from './model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartStorageKey = 'cart-items';
  private cartItems: CartItem[] = [];
  private cartAmount: number = 0;

  cartItems$ = new BehaviorSubject<CartItem[]>([]);
  cartAmount$ = new BehaviorSubject<number>(this.cartAmount);

  constructor(private localStorage: LocalStorageService) { }

  addItem(pizza: Pizza): void {
    this.cartItems.push(new CartItem(pizza, 1));
    this.calculateAmount(pizza.price);
    this.emitItems();
  }

  removeItem(pizza: Pizza): void {
    this.cartItems = this.cartItems.filter(cartItem => pizza.id !== cartItem.item.id);
    this.calculateAmount(-pizza.price);
    this.emitItems();
  }

  clearCart(): void {
    this.cartItems = [];
    this.emitItems();
    this.cartAmount = 0;
    this.calculateAmount(0);
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
      let amount = 0;
      this.cartItems.forEach(cartItem => amount += cartItem.item.price * cartItem.quantity);
      this.cartItems$.next(this.cartItems);
      this.calculateAmount(amount);
    }
  }

  calculateAmount(price: number): void {
    this.cartAmount += price;
    this.cartAmount$.next(this.cartAmount);
  }
}
