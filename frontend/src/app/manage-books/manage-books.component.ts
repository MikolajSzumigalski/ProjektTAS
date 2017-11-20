import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  books1 = {};
  res = {};
  constructor(private service:CommunicationService) { }

  removeBook(id){
    this.service.removeBook(id).subscribe(res =>this.res = res);
    setTimeout(()=>
    this.service.getBooks()
  .subscribe(books1 =>this.books1 = books1),500);
    }

  ngOnInit() {
    this.service.getBooks().subscribe(books1 =>this.books1 = books1);
    console.log("service is working");
    setTimeout(()=>
    this.service.getBooks()
  .subscribe(books1 =>this.books1 = books1),500);
  }
}
