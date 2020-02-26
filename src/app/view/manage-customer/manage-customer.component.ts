import { Component, OnInit } from '@angular/core';
import {Customer} from "../../dto/customer";

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {

  id:string = '';
  name:string='';
  address:string='';


  customers:Array<Customer> = [];




  constructor() { }

  ngOnInit() {
  }




  saveCustomer():void{

    this.customers.push(new Customer(this.id,this.name,this.address));
  }



}
