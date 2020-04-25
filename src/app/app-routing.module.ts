import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './site-info/about-us/about-us.component';


const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./order-processing/order-processing.module').then(m => m.OrderProcessingModule)
  },
  {
    path: '',
    loadChildren: () => import('./pizza-list/pizza-list.module').then(m => m.PizzaListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
