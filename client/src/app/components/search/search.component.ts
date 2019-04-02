import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
// tslint:disable-next-line: ban-types
  buyerSearch: String;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.buyerSearch);
  }
}
