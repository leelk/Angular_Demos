import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './view/test/test.component';
import { Test2Component } from './view/test2/test2.component';
import {CustomerService} from "./services/customer.service";

import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
