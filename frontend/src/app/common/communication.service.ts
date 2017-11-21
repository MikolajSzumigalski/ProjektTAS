import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Book } from './book';

@Injectable()
export class CommunicationService {
  headers: {
    name: string;
    value: string;
  }[]
  constructor(private http: Http) {
    this.headers = [
    {name:'Cache-Controlr', value:'no-cache, no-store, must-revalidate'},
    {name:'Pragma', value:'no-cache'},
    {name:'Expires', value:'0'},
    {name:'Access-Control-Allow-Origin', value:'*'}];
   }
  response ={};
  books1 = {};
  book ={};
  url = "http://localhost:4000/api/insert";
  getBooks(){
   return this.http.get('http://localhost:4000/api/books')  
    .map((res:Response)=> {let books1 = res.json().data;
      console.log("wywołanie metody getBooks")
      return books1;
     });}
  removeBook(id){
    return this.http.get('http://localhost:4000/api/remove/'+id)  
    .map((res:Response)=> {let response = res.json().data;
      console.log('usunięto ksiązkę');
      return response;
      });}   
  getBooksWithObservable(): Observable<Book[]> {
    return this.http.get(this.url)
   .map(this.extractData)
   .catch(this.handleErrorObservable);
  }
  addBookWithObservable(book:Book): Observable<Book> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post(this.url, book, options)
                     .map(this.extractData)
                     .catch(this.handleErrorObservable);
      }
  private extractData(res: Response) {
    let body = res.json();
          return body.data || {};
      }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
}
