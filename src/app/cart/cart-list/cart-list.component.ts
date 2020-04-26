import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CartItem } from '../model';

@Component({
  selector: 'sb-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: CartItem[];
  cartAmount$: Observable<number>;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => this.cartItems = items);
    this.cartAmount$ = this.cartService.cartAmount$;
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem.item);
  }

  placeOrder(): void {
    this.router.navigate(['place-order'])
  }

  increaseByOne(cartItem: CartItem): void {
    this.cartService.increaseByOne(cartItem);
  }

  decreaseByOne(cartItem: CartItem): void {
    this.cartService.decreaseByOne(cartItem);
  }

}
