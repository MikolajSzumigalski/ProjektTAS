import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommunicationService {

  constructor(private http: Http) { }

  getBooks(){
    return this.http.get('localhost:8000/api/books')
    .map((res:Response)=> {let books = res.json().data;
      return books;
     });}
}
