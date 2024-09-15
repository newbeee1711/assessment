import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.scss']
})
export class HackathonDetailsComponent {
  constructor(private router: Router) {}
  minStartDate = new Date(); // Prevent past dates for start date
  minEndDate = this.minStartDate; // Initially the same as the start date

  validateDates() {
    // Update minEndDate to prevent end date being earlier than start date
    const startDateInput: HTMLInputElement | null = document.querySelector('input[placeholder="Choose a date"]');
    if (startDateInput?.value) {
      this.minEndDate = new Date(startDateInput.value);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      // Handle file upload logic here
    }
  }
  GoToHomePage(){
    // validations can be added as per the requirement 
    this.router.navigate(['/home']);
  }
}

