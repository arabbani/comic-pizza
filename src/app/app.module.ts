import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteInfoModule } from './site-info/site-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SiteInfoModule,
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
