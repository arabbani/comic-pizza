import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { UserAddressComponent } from './user-address/user-address.component';


const routes: Routes = [
  {
    path: '',
    component: OrderProcessingComponent,
    children: [
      {
        path: 'billing-info',
        component: BillingInfoComponent
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent
      },
      {
        path: '',
        component: UserAddressComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderProcessingRoutingModule { }
