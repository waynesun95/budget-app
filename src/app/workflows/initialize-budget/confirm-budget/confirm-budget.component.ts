import { RouterExtensions } from 'nativescript-angular/router';
import { InitializeBudgetWorkflowService } from './../intialize-budget-workflow.service';
import { BudgetDetailModel } from './../../../models/budget-detail.model';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { EventData, Page } from 'tns-core-modules/ui/page';
import { Switch } from 'tns-core-modules/ui/switch';
import { confirm } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "confirm-budget-workflow",
    templateUrl: "confirm-budget.component.html",
    styleUrls: ["confirm-budget.component.css"]
})
export class ConfirmBudgetWorkflowComponent implements OnInit {

    budgetDetails: BudgetDetailModel[];
    netBudget: number;
    month: string;

    get currentDateText(): string {
        this.month = this.datePipe.transform(new Date(), 'MMMM');
        return `Confirm budget for ${this.month}`;
    }

    constructor(
        private datePipe: DatePipe,
        private initializeBudgetWorkflowService: InitializeBudgetWorkflowService,
        private currencyPipe: CurrencyPipe,
        private page: Page,
        private routerExtensions: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.budgetDetails = [
            {label: 'Expected income:', value: this.initializeBudgetWorkflowService.budget},
            {label: 'Last month net:', value: this.initializeBudgetWorkflowService.previousMonthNetRemainingBudget}
        ];
    }

    /**
     * Parses number into currency format.
     * @param value amount in dollars
     */
    getValueDisplay(value: number): string {
        return this.currencyPipe.transform(value);
    }

    /**
     * Returns total budget after accounting for last months net remaining budget in currency format
     */
    getTotalBudget(): string {
        this.netBudget = this.budgetDetails.reduce(
            (total, detail) => detail.disabled ? total : total + detail.value
        , 0);
        return this.currencyPipe.transform(this.netBudget);
    }

    /**
     * Called when slider is toggled
     * @param args toggle event
     */
    useLastMonthNet(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked;
        this.budgetDetails[1].disabled = !isChecked;
    }

    onBack() {
        this.routerExtensions.back();
    }

    onSubmit() {
        let options = {
            title: `Confirm ${this.month} budget`,
            message: `Are you sure you want to allocate ${this.currencyPipe.transform(this.netBudget)} to cover your spending in the month of ${this.month}?`,
            okButtonText: 'Yes',
            cancelButtonText: 'Cancel'
        };

        confirm(options).then((result: boolean) => {
            // TODO: Save data
            if (result) {
                this.routerExtensions.navigate(['initialize-budget/required-categories']);
            }
        });
    }
}
