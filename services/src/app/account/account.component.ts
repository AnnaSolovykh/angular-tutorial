import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService],
  //if add AccountsService to the provider the instance from app component will be overwritten
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor(
    //private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}

/*
//alternative for the services injection
import { Component, Input, Output, inject } from '@angular/core'; // <- Add inject import

@Component(...)
export class AccountComponent {
  // @Input() & @Output() code as shown above
  private loggingService?: LoggingService; // <- must be added
 
  constructor() {
    this.loggingService = inject(LoggingService);
  }
}*/