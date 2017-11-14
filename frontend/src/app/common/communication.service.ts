import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
books1 = {};
  getBooks(){
   //return this.http.get('http://213.184.22.45/querydb.php?dane={%22collection%22:%22rezerwacje%22,%20%22mode%22:%22find%22,%20%22dane%22:{%22sala%22:%22A2-1%22}}', this.headers)
    return this.http.get('http://localhost:4000/api/books')  
    .map((res:Response)=> {let books1 = res.json().data;
      console.log('ksiazki:'+ books1);
      console.log("metoda getBooks")
      return books1;
     });}
    
}
