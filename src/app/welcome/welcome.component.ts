import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../service/data/book-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
titleFromService: String
name =''

  constructor(private route: ActivatedRoute,
  private service: BookDataService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    //console.log(this.service.executeReturnBook());
    this.service.executeReturnBook().subscribe(
      response => this.handleSuccessfulResponse(response)
      //, error => this.handleErrorResponse(error)
      
      
    );
   
  }

  handleErrorResponse(error){
    this.titleFromService = "jaks blad";

  }

  handleSuccessfulResponse(response){
   this.titleFromService = response.author;
   this.titleFromService = response.title + response.author;
   
  }

}
