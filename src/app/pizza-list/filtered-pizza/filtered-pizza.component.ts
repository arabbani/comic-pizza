import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/util/service/pizza.service';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/util/pizza';

@Component({
  selector: 'sb-filtered-pizza',
  templateUrl: './filtered-pizza.component.html',
  styleUrls: ['./filtered-pizza.component.scss']
})
export class FilteredPizzaComponent implements OnInit {

  pizzaItems$: Observable<Pizza[]>;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaItems$ = this.pizzaService.filteredPizza$;
  }

}
