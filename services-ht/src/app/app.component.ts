import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(
    private userService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  getTotalCount() {
    return this.counterService.getTotalChanges();
  }
}