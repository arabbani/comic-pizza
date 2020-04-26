import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    NgbToastModule
  ],
  exports: [ToastComponent]
})
export class SharedModule { }
