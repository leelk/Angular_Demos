import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../dto/item";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../dto/customer";

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllItems():Observable<Array<Item>>{
    return this.http.get<Array<Item>>('http://localhost:5050/api/v1/items');
  }


}
