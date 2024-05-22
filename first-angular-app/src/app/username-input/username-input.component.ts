import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrl: './username-input.component.css'
})

export class UsernameInputComponent implements OnInit { 
  userName = '';
  message = '';

  constructor() {
  }
    ngOnInit() {
  }
  onSubmit() {
    this.message = `Username ${this.userName} has been successfully submitted!`;
    this.userName = '';
  }
}
