import { Component, OnInit } from '@angular/core';
import {Customer} from "../../dto/customer";
import {CustomerService} from "../../services/customer.service";
import {Item} from "../../dto/item";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  something='ISJE';


  name ='Leel';
  colors: Array<String> =['Green','Yellow','Red','Blue'];
  customers:Array<Item> = [];
  constructor(private customerService : CustomerService) {

    /*this.customers.push(new Customer("C001","Leel","Henpita"));
    this.customers.push(new Customer("C002","Heshan","Mathugama"));
    this.customers.push(new Customer("C003","Sahan","Rathnapura"));
    this.customers.push(new Customer("C004","Miyuru","Opanayake"));*/

  }

  ngOnInit() {

    this.customerService.getAllItems().subscribe(value =>
    {
      console.log("leeeeeeeeeeeeeeeee");
      console.log(value);
      this.customers=value;
    },
      error1 => {

      });
  }


  print(){
    return "Karu";
  }


}


