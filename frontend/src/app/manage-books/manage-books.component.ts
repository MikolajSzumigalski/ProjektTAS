import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { Book } from 'app/common/book';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  books1 = {};
  res = {};
  books: Book[];
  errorMessage: String;
  bookName: String;
  book = new Book();   
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
  this.fetchBooks();
  }

  fetchBooks(): void {
       this.service.getBooksWithObservable()
     .subscribe( books => this.books = books,
                       error => this.errorMessage = <any>error);    
  }
  addBook(): void {
    this.service.addBookWithObservable(this.book)
      .subscribe( book => {
                 this.fetchBooks();		
                                   this.reset();   
                       this.bookName = book.name;						   
      },
                        error => this.errorMessage = <any>error);
      setTimeout(()=>
      this.service.getBooks()
    .subscribe(books1 =>this.books1 = books1),500);
  }
  private reset() {
    this.book.author = null;	 
    this.book.name = null;
    this.book.price = null;
    this.errorMessage = null;
    this.bookName = null;
  }   
}
