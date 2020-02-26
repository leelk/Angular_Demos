import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './view/test/test.component';
import { Test2Component } from './view/test2/test2.component';
import {CustomerService} from "./services/customer.service";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ManageCustomerComponent} from "./view/manage-customer/manage-customer.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ManageCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
