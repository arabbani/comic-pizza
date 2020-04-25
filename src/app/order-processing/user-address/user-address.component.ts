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
      contactNumber: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

  processAddress(): void {
    this.orderProcessingService.addAddress(this.userAddressForm.value);
    this.router.navigate(['billing-info'], {
      relativeTo: this.route
    })
  }

}
