import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
    //this is need to make the service injectable
    //in the future version it should be used in every service

export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active',
        },
        {
            name: 'Testaccount',
            status: 'inactive',
        },
        {
            name: 'Hidden Account',
            status: 'unknown',
        },
    ];
    constructor(private loggingService: LoggingService) {}
        
    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
