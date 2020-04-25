import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderProcessingRoutingModule } from './order-processing-routing.module';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { OrderSuccessComponent } from './order-success/order-success.component';



@NgModule({
  declarations: [OrderProcessingComponent, UserAddressComponent, BillingInfoComponent, OrderSuccessComponent],
  imports: [
    CommonModule,
    OrderProcessingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderProcessingModule { }
