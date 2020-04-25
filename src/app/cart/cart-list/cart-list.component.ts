import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CartItem } from '../model';
import { Router, ActivatedRoute } from '@angular/router';

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

}
