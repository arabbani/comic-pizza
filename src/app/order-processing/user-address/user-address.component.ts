import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderProcessingService } from '../order-processing.service';

@Component({
  selector: 'sb-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit {

  userAddressForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderProcessingService: OrderProcessingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userAddressForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(new RegExp('^[0-9]{10}$'))]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(new RegExp('^[0-9]{6}$'))]]
    });
  }

  processAddress(): void {
    this.orderProcessingService.addAddress(this.userAddressForm.value);
    this.router.navigate(['billing-info'], {
      relativeTo: this.route
    })
  }

}
