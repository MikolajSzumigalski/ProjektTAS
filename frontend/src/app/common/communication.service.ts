import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

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
  url = "http://localhost:4000/api/insert/";
}
