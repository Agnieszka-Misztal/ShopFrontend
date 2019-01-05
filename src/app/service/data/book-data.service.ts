import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class BookBean{
  constructor(public titile:string){}
}


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeReturnBook(){
   return this.http.get('http://localhost:8080/book')
 

  }
}
