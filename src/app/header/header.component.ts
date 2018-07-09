import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'starter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  currentRoute: string

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url.substr(1, event.url.length - 1);
        }
      }
    );
  }

  ngOnInit() {
  }

}
