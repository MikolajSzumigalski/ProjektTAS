import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  book = {
    name: "Wilcze Leże",
    author: "Andrzej Pilipiuk",
    price: 31
  }
}
