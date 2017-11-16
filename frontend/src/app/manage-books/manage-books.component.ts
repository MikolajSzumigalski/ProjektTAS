import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
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
    },
    {
      id:3,
      name: 'Szubienicznik',
      author: "Jacek Piekara",
      price: 45,
      image:'http://ecsmedia.pl/c/szubienicznik-tom-1-b-iext43249274.jpg',
      describtion:"Świat Erdas wciąż jest w niebezpieczeństwie Conor, Abeke, Meilin i Rollan starają się uratować świat przed starożytnym złem, ale więź łącząca zwierzoduchy z ich opiekunami jest coraz słabsza. Przyjaciele stają oko w oko z wrogiem, który posiada zdolność ...."
    },
    {
      id:4,
      name: 'Szubienicznik',
      author: "Jacek Piekara",
      price: 45,
      image:'http://ecsmedia.pl/c/szubienicznik-tom-1-b-iext43249274.jpg',
      describtion:"Świat Erdas wciąż jest w niebezpieczeństwie Conor, Abeke, Meilin i Rollan starają się uratować świat przed starożytnym złem, ale więź łącząca zwierzoduchy z ich opiekunami jest coraz słabsza. Przyjaciele stają oko w oko z wrogiem, który posiada zdolność ...."
    },
    {
      id:5,
      name: 'Szubienicznik',
      author: "Jacek Piekara",
      price: 45,
      image:'http://ecsmedia.pl/c/szubienicznik-tom-1-b-iext43249274.jpg',
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

}