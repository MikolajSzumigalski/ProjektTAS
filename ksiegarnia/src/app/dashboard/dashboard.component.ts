import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  book = [
    {
      name: "Wilcze Leże",
      author: "Andrzej Pilipiuk",
      price: 31,
      image:[
        {
          url:'http://placehold.it/640x640'
        }
      ]
    },
    {
      name: 'Album 2',
      image:[
        {
          url:'http://placehold.it/640x640'
        }
      ]
    },
    {
      name: 'Album 3',
      image:[
        {
          url:'http://placehold.it/640x640'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
