import { Component, OnInit } from '@angular/core';

export class Book{
  constructor(
    public id : number,
    public title: string,
    public autor: string,
    public description: string,
    public price: number

  ){

  }

}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books =[
    new Book( 1, 'zenek w lesie','zenek', 'cos tam', 20.0),
    new Book( 2, 'zenek na morzu','zenek', 'cos tam', 20.0),
    new Book( 3, 'zenek na pustyni','zenek', 'cos tam', 20.0)
   

  ]
 
  constructor() { }

  ngOnInit() {
  }

}
