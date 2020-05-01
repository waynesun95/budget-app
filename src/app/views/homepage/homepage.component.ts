import { DataService } from './../../services/data.service';
import { Component, OnInit } from "@angular/core";
import { DatePipe, CurrencyPipe } from "@angular/common";

@Component({
    selector: "ba-homepage",
    templateUrl: "homepage.component.html",
    styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {

    get currentDate(): string {
        return this.datePipe.transform(new Date(), 'MMM d, y');
    }

    get remainingDays(): any {
        const currentDate = new Date();
        const nextMonth = new Date(currentDate.getTime());
        nextMonth.setMonth(currentDate.getMonth() + 1);
        nextMonth.setDate(0);

        if (nextMonth.getDate() > currentDate.getDate()) {
            // today is not last day of the month
            return `${nextMonth.getDate() - currentDate.getDate() + 1} days remaining`;
        } else {
            // today is the last day of the month
            return 'Last day of month';
        }
    }

    get remainingBudget(): string {
        return `${this.currencyPipe.transform(this.dataService.userContext.remainingBudget)} remaining`;
    }

    get totalBudget(): string {
        return `(${this.currencyPipe.transform(this.dataService.userContext.totalBudget)} originally)`;

    }

    constructor(
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe,
        private dataService: DataService
    ) {}

    ngOnInit() {
        console.log('HomepageComponent initialized');
    }
}
