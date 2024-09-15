import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // These facts can be done dynamically
   number_of_chips:string='100K+';
   data_scientists:string='50K';
   hosted:string='100+';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  OnClick(){
    this.router.navigate(['/add']);
  }
}
