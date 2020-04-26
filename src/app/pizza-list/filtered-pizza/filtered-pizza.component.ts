import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Pizza } from 'src/app/pizza-list/util/pizza';
import { PizzaService } from 'src/app/pizza-list/service/pizza.service';

@Component({
  selector: 'sb-filtered-pizza',
  templateUrl: './filtered-pizza.component.html',
  styleUrls: ['./filtered-pizza.component.scss']
})
export class FilteredPizzaComponent implements OnInit {

  pizzaItems: Pizza[];

  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

  ngOnInit(): void {
    this.pizzaService.filteredPizza$.subscribe(items => this.pizzaItems = items);
  }

  addToCart(pizza: Pizza): void {
    this.cartService.addItem(pizza);
  }

  removeFromCart(pizza: Pizza): void {
    this.cartService.removeItem(pizza);
  }

  addedToCart(pizza): boolean {
    return this.cartService.isInCart(pizza);
  }

}
