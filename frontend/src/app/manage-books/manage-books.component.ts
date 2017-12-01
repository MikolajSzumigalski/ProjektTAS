import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { Book } from 'app/common/book';
import { Observable } from 'rxjs';
//import {InlineEditorModule} from 'ng2-inline-editor'
import { InlineEditDirective } from 'angular2-inline-edit';
import { FormsModule, Validators } from '@angular/forms';
import {NgControl} from '@angular/forms';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  ngOnInit() {
    this.service.getBooks().subscribe(books1 =>this.books1 = books1);
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
  updateBook(book): void {
    this.service.editBookWithObservable(book)
      .subscribe( book => {
                 this.fetchBooks();		
                                   this.reset();   
                       this.bookName = book.name;					   
      });
    this.refreshGetBooks();
  }
  addBook(valid): void {
    if(!valid){
      return;
    }
     this.service.addBookWithObservable(this.book)
       .subscribe( book => {
                  this.fetchBooks();		
                                    this.reset();   
                        this.bookName = book.name;						   
       },
                         error => this.errorMessage = <any>error);
     window.location.reload()
   }
  books1 = {};
  books2 = {};
  res = {};
  books: Book[];
  errorMessage: String;
  bookName: String;
  book = new Book();  
  constructor(private service:CommunicationService) { }
  removeBook(id){
    this.service.removeBook(id).subscribe(res =>this.res = res);
    this.refreshGetBooks();
    }  
  refreshGetBooks():void{
    setTimeout(()=>
    this.service.getBooks()
  .subscribe(books1 =>this.books1 = books1),500);
  }
  private reset() {
    this.book.author = null;	 
    this.book.name = null;
    this.book.price = null;
    this.book.count = null;
    this.errorMessage = null;
    this.bookName = null;
   this.book.isbn = null;
    this.book.describtion = null;
  }   

  
}
