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
  processingPayment = false;

  cartAmount$: Observable<number>;

  constructor(private formBuilder: FormBuilder, private orderProcessingService: OrderProcessingService, private router: Router, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartAmount$ = this.cartService.cartAmount$;
    this.billingInfoForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      nameOnCard: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      expiryMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      expiryYear: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  makePayment(): void {
    this.processingPayment = true;
    this.orderProcessingService.makePayment(this.billingInfoForm.value).subscribe(response => {
      if (response) {
        this.cartService.clearCart();
        this.processingPayment = false;
        this.router.navigate(['../order-success'], {
          relativeTo: this.route
        });
      }
    });
  }

}
