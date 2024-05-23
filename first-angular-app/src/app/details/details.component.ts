import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsAdded = false;
  clickLogs: string[] = []; 

  onDetailsAdded() {
    this.detailsAdded = !this.detailsAdded; 
    this.clickLogs.push(`Button clicked at ${new Date().toLocaleTimeString()}`); 
  }
  getColor(index: number) {
    return index >= 4 ? 'blue' : 'transparent';
  }
  isTextWhite(index: number) {
    return index >= 4;
  }
}
