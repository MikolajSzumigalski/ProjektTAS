import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books1 = {};
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
