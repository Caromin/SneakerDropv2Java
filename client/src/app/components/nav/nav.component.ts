import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  route: boolean;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
// tslint:disable-next-line: triple-equals
      if (location.path() !== '') {
        this.route = false;
      } else {
        this.route = true;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    console.log('user was logged out');
  }
}
