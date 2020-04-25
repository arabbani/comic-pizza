import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PizzaBase, PizzaType, PizzaFilter } from 'src/app/util/pizza';
import { PizzaBaseService } from 'src/app/util/service/pizza-base.service';
import { PizzaTypeService } from 'src/app/util/service/pizza-type.service';
import { PizzaService } from 'src/app/util/service/pizza.service';

@Component({
  selector: 'sb-pizza-filter',
  templateUrl: './pizza-filter.component.html',
  styleUrls: ['./pizza-filter.component.scss']
})
export class PizzaFilterComponent implements OnInit {

  pizzaBases$: Observable<PizzaBase[]>;
  pizzaTypes$: Observable<PizzaType[]>;

  pizzaFilterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private pizzaBaseService: PizzaBaseService, private pizzaTypeService: PizzaTypeService, private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.getPizzaBases();
    this.getPizzaTypes();
    this.initPizzaFilterForm();
  }

  private initPizzaFilterForm() {
    this.pizzaFilterForm = this.formBuilder.group({
      veg: [''],
      price: [100],
      base: [''],
      type: ['']
    });
    this.pizzaFilterForm.valueChanges.subscribe((filterValue: PizzaFilter) => {
      this.pizzaService.filterPizza(filterValue);
    });
  }

  private getPizzaBases() {
    this.pizzaBases$ = this.pizzaBaseService.getPizzaBases();
  }

  private getPizzaTypes() {
    this.pizzaTypes$ = this.pizzaTypeService.getPizzaTypes();
  }

}
