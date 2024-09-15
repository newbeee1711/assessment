import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showComponent = true;  // A flag to show/hide the component

  constructor(private router: Router) {
    // Subscribe to the router's events to check for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/add' or any route where you want to hide the component
        if(event.url=='/add'|| event.url=='/edit'|| event.url=='/hackathon'){
          this.showComponent=false;
        }
        
      }
    });
  }

}
