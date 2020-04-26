import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pizza } from '../pizza-list/util/pizza';
import { CartItem } from './model';
import { ToastService } from '../shared/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartStorageKey = 'cart-items';
  private cartItems: CartItem[] = [];
  private cartAmount: number = 0;

  cartItems$ = new BehaviorSubject<CartItem[]>([]);
  cartAmount$ = new BehaviorSubject<number>(this.cartAmount);

  constructor(private localStorage: LocalStorageService, private toastService: ToastService) { }

  addItem(pizza: Pizza): void {
    this.cartItems.push(new CartItem(pizza, 1));
    this.calculateAmount(pizza.price);
    this.emitItems();
    this.toastService.show(`${pizza.name} added to cart.`, { classname: 'bg-success text-light', delay: 3000 });
  }

  removeItem(pizza: Pizza): void {
    this.cartItems = this.cartItems.filter(cartItem => pizza.id !== cartItem.item.id);
    this.calculateAmount(-pizza.price);
    this.emitItems();
    this.toastService.show(`${pizza.name} removed from cart.`, { classname: 'bg-danger text-light', delay: 3000 });
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
