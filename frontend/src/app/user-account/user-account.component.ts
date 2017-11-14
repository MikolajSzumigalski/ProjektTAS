import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent implements OnInit {
   books1 = {};
  books = [
    {
      id:1,
      name: "Wilcze Leże",
      author: "Andrzej Pilipiuk",
      price: 55,
      image:'https://static.intelimedia.pl/sub/_bw79530.jpg',
      describtion:"Świat Erdas wciąż jest w niebezpieczeństwie Conor, Abeke, Meilin i Rollan starają się uratować świat przed starożytnym złem, ale więź łącząca zwierzoduchy z ich opiekunami jest coraz słabsza. Przyjaciele stają oko w oko z wrogiem, który posiada zdolność ...."
    },
    {
      id:2,
      name: 'Pan Lodowego ogrodu',
      author: "Jarosław Grzędowycz",
      price: 64,
      image:'https://static.intelimedia.pl/sub/_bc25045.jpg',
      describtion:"Świat Erdas wciąż jest w niebezpieczeństwie Conor, Abeke, Meilin i Rollan starają się uratować świat przed starożytnym złem, ale więź łącząca zwierzoduchy z ich opiekunami jest coraz słabsza. Przyjaciele stają oko w oko z wrogiem, który posiada zdolność ...."
    }
  ];
  constructor(private service:CommunicationService) { }
  ngOnInit() {
    this.service.getBooks().subscribe(books1 =>this.books1 = books1);
    console.log("service is working");
    console.log("from user-account: " + this.books1);
    setTimeout(()=>
    this.service.getBooks()
  .subscribe(books1 =>this.books1 = books1),500);
  }
 // console.log(books);
  //console.log("Hello1");
}
