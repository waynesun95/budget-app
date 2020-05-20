import { CurrencyPipe } from '@angular/common';
import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "ba-category-list-item",
    templateUrl: "category-list-item.component.html",
    styleUrls: ['category-list-item.component.css']
})
export class CategoryListItemComponent {

    @Input() title: string;

    @Input() remainingBudget: number;

    @Input() originalBudget: number;

    @Input() divider: boolean;

    @Input() itemHeight: number = 60;

    @Output() tap = new EventEmitter();

    constructor(private currencyPipe: CurrencyPipe) {}

    /**
     * Takes in a number and returns it in curency format ($1234.56)
     * @param value the currency value in number format
     */
    currencyFormat(value: number): string {
        return this.currencyPipe.transform(value);
    }

    getOriginalBudgetDisplay() {
        return `(${this.currencyFormat(this.originalBudget)} originally)`
    }
}
