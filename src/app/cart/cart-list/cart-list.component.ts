import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CartItem } from '../model';

@Component({
  selector: 'sb-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem.item);
  }

}
