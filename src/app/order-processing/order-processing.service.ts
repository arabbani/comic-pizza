import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { BillingInfo, CheckoutInfo } from './model';

@Injectable({
  providedIn: 'root'
})
export class OrderProcessingService {

  checkoutInfo: CheckoutInfo;

  constructor() { }

  addAddress(userAddress: CheckoutInfo): void {
    this.checkoutInfo = new CheckoutInfo(userAddress.name, userAddress.contactNumber, userAddress.address, userAddress.city, userAddress.state, userAddress.pincode);
  }

  makePayment(billingInfo: BillingInfo): Observable<boolean> {
    let userBillingInfo = new BillingInfo(billingInfo.cardNumber, billingInfo.nameOnCard, billingInfo.cvv);
    this.checkoutInfo.billinInfo = userBillingInfo;
    return of(true).pipe(delay(1000));
  }

}
