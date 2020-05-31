import { CurrencyPipe } from '@angular/common';
import { Component, Input } from "@angular/core";

@Component({
    selector: "ba-expense-list-item",
    templateUrl: "expense-list-item.component.html",
    styleUrls: ['expense-list-item.component.css']
})
export class ExpenseListItemComponent {

    @Input() title: string;

    _amount: string;
    get amount() {
        return this.currencyPipe.transform(this._amount);

    }
    @Input('amount')
    set amount(value: string) {
        this._amount = value;
    }

    @Input() notes: boolean = false;
    noteIconUnicode = String.fromCharCode(0xf044);

    @Input() height: number;
    @Input() divider = true;

    constructor(private currencyPipe: CurrencyPipe) {}
}
