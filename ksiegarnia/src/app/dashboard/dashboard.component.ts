import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books = [
    {
      id:1,
      name: "Wilcze Leże",
      author: "Andrzej Pilipiuk",
      price: 55,
      image:'https://static.intelimedia.pl/sub/_bw79530.jpg'
    },
    {
      id:2,
      name: 'Pan Lodowego ogrodu',
      author: "Jarosław Grzędowycz",
      price: 64,
      image:'https://static.intelimedia.pl/sub/_bc25045.jpg'
    },
    {
      id:3,
      name: 'Szubienicznik',
      author: "Jacek Piekara",
      price: 45,
      image:'http://ecsmedia.pl/c/szubienicznik-tom-1-b-iext43249274.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
