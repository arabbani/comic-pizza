import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { OrderProcessingService } from '../order-processing.service';

@Component({
  selector: 'sb-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {

  billingInfoForm: FormGroup;

  cartAmount$: Observable<number>;

  constructor(private formBuilder: FormBuilder, private orderProcessingService: OrderProcessingService, private router: Router, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartAmount$ = this.cartService.cartAmount$;
    this.billingInfoForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      nameOnCard: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  makePayment(): void {
    this.orderProcessingService.makePayment(this.billingInfoForm.value).subscribe(response => {
      if (response) {
        this.router.navigate(['../order-success'], {
          relativeTo: this.route
        })
      }
    });
  }

}
