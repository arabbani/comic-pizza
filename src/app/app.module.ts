import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot({
      prefix: 'mypizza',
      separator: '-',
      caseSensitive: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
