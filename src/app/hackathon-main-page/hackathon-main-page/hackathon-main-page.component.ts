import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackathon-main-page',
  templateUrl: './hackathon-main-page.component.html',
  styleUrls: ['./hackathon-main-page.component.scss']
})
export class HackathonMainPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  GoToEditPage(){
    this.router.navigate(['/edit']);
    // here it goes to edit  page with details patched

  }
}
